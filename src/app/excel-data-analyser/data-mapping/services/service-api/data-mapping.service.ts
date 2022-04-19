import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DataMappingService {
  constructor(private http: HttpClient) {

  }
}
