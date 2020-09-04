import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { summaryFileName } from '@angular/compiler/src/aot/util';

@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor(private http: HttpClient) { }
  getFileList(){
    const url = "http://44.225.51.224:5600/files";
    return this.http.get(url);
  }
  getFileDetail(dir:string, file:string){
    console.log("file>>", file);
    const url = "http://44.225.51.224:5600/read_csv/"+ dir+"/"+file;
    return this.http.get(url)
  }
}
