import {HttpClient, HttpEventType} from "@angular/common/http";
import {Component, Input} from "@angular/core";
import { Observable, Subscription} from "rxjs";
import {  finalize } from 'rxjs/operators';
import {DATA} from "../excel-data-analyser.const";
import {SelectItem} from "primeng/api";

@Component({
  selector: 'file-upload',
  templateUrl: "file-upload.component.html",
  styleUrls: ['file-upload.component.css']

})
export class FileUploadComponent {

  @Input()
  requiredFileType!: string;

  fileName = '';
  uploadProgress!: number;
  uploadObs: any;
  upload :  any;
  isUploaded !:boolean;
  type: any;
  types : SelectItem[] = DATA;
  excelDialogDisplay! :boolean;
  displayData: any;
  fileData : any;

  @Input('fileUploadData') set fileUploadData(data: {}) {
    if (data && Object.keys(data).length) {
      this.fileData = data;
    }
  }


  constructor(private http: HttpClient) {}

  onFileSelected(event:any) {
    const file:File = event.target.files[0];

    if (file) {
      this.fileName = file.name;
      const formData = new FormData();
      formData.append("thumbnail", file);

      this.upload = this.http.post("/api/thumbnail-upload", formData, {
        reportProgress: true,
        observe: 'events'
      })
        .pipe(
          finalize(() => this.reset())
        );

      this.uploadObs = this.getUpload().subscribe((event: { type: HttpEventType; loaded: number; total: number; })=> {
        if (event.type == HttpEventType.UploadProgress) {
          this.uploadProgress = Math.round(100 * (event.loaded / event.total));
        } else {
          this.isUploaded = true;
        }
      })
    }
  }


  public getUpload(): any {
    const upObservable = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.upload);
      }, 1000);
    });

    return upObservable;
  }

  cancelUpload() {
    this.uploadObs.unsubscribe();
    this.reset();
  }
  uploadFile(){

  }

  reset() {
    this.uploadProgress = 0;
    this.uploadObs = [];
    this.isUploaded = false;
  }
}
