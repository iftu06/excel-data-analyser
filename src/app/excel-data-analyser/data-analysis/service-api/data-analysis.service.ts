import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataAnalysisService {
  constructor(private http: HttpClient) {

  }
}
