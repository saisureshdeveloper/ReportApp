
import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';

const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

@Injectable()
export class ExcelService {

  constructor() { }

  public exportAsExcelFile(json: any[], excelFileName: string): void {
    
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    // const cell_format = worksheet.add_format()
   
    
    console.log('worksheet',worksheet);
    const workbook: XLSX.WorkBook = { Sheets: { 'data': worksheet }, SheetNames: ['data'] };
   
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    //const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'buffer' });
    this.saveAsExcelFile(excelBuffer, excelFileName);
  }
  public BRSexportAsExcelFile(d1, d2,d3,d4,d5, fileName: string): void {
    const worksheet1: XLSX.WorkSheet = XLSX.utils.json_to_sheet(d1);
    const worksheet2: XLSX.WorkSheet = XLSX.utils.json_to_sheet(d2);
    const worksheet3: XLSX.WorkSheet = XLSX.utils.json_to_sheet(d3);
    const worksheet4: XLSX.WorkSheet = XLSX.utils.json_to_sheet(d4);
    const worksheet5: XLSX.WorkSheet = XLSX.utils.json_to_sheet(d5);
   
    const workbook: XLSX.WorkBook = {
       Sheets: { 
         'Cheques_Issued': worksheet1, 
         'Credits_IN_GL': worksheet2,
         'Debits_IN_GL': worksheet3, 
         'Bank_Debits': worksheet4,
         'Bank_Credits': worksheet5, 
       
        },
        SheetNames: ['Cheques_Issued', 'Credits_IN_GL', 'Debits_IN_GL', 'Bank_Debits', 'Bank_Credits'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, fileName);
  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

}