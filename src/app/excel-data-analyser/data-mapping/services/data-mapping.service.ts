import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import IMapper from "../domain/data-mapping.domain";
import IMapperName from "../domain/mapper-name.domain";

@Injectable()
export class DataMappingService {
  private table_url: string = "http://localhost:7071/api/getTableList";
  private mapper_name_url: string = "http://localhost:7071/api/getMapperNames";
  private column_list_url: string = "http://localhost:7071/api/getColumnList";

  constructor(private http: HttpClient) {

  }

  public getTableList(): Observable<string[]> {
    return this.http.get<string[]>(this.table_url);
  }

  public getMapperNames(queryParam): Observable<IMapperName[]> {
    const httpParams = new HttpParams({
      fromObject: queryParam
    });
    return this.http.get<IMapperName[]>(this.mapper_name_url, { params: httpParams });;
  }

  public saveMapping(): Observable<IMapper> {
    return null;
  }

  public getTableColumns(queryParam): Observable<string[]> {
    const httpParams = new HttpParams({
      fromObject: queryParam
    });
    return this.http.get<string[]>(this.column_list_url, { params: httpParams });;
  }

}
