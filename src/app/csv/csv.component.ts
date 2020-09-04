import { Component, OnInit } from '@angular/core';
import { CsvService } from "../services/csv.service";
import { ClassField } from '@angular/compiler';

@Component({
  selector: 'app-csv',
  templateUrl: './csv.component.html',
  styleUrls: ['./csv.component.css']
})
export class CsvComponent implements OnInit {
  public fileListArray = []
  public filedetailArray = []
  public fileColumn = []

  constructor(public csvService: CsvService) { }

  ngOnInit(): void {
    this.csvService.getFileList().subscribe(
      (res: any) => {
        this.fileListArray = res
        console.log(this.fileListArray);
        this.getDetail(this.fileListArray[0].dirname, this.fileListArray[0].files[0]);
      }
    );


  }
  getDetail(dirname, filename) {
    console.log(">>>>", dirname, filename);
    this.csvService.getFileDetail(dirname, filename).subscribe(
      (data: any) => {
        this.filedetailArray = data.data
        this.fileColumn = data.columns
        console.log("filedetail", this.filedetailArray);
        console.log(">>>>filecolumn", this.fileColumn);

      }
    )
  }

}
