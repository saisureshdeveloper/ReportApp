import { Injectable } from '@angular/core';
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import { ExportType } from '../enums/export-type.enum';
import { DashboardService } from './dashboard.service';
import _ from 'lodash';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';
const PDF_EXTENSION = '.pdf';
declare var jsPDF: any;
@Injectable({
  providedIn: 'root'
})
export class ExortFileService {
  constructor(private dashboardService: DashboardService) { }

  public exportTypeExcel(dataInt: any[], dataExt: any[], fileName: string) {
    let rows = [], de1 = [], de2 = [];
    const { dataMajorInt, dataMajorExt, getHeaderArrayInt, getHeaderArrayExt } = this.getRowsForExcel(dataInt, dataExt);
    const { data1, data2 } = this.segregateData(dataMajorInt, dataMajorExt, getHeaderArrayInt, getHeaderArrayExt);
    de1 = data1; de2 = data2;
    this.exportAsExcelFile(de1, de2, fileName);
  }

  public exportTypePdf(data: any[], fileName: string) {
    let rows = [];
    rows = this.getRows(data, fileName);
    this.exportAsPdfFile(rows, fileName);
  }

  private segregateData(dataMajorInt, dataMajorExt, getHeaderArrayInt, getHeaderArrayExt): any {
    const extArray = getHeaderArrayExt.filter(x => x.toLowerCase().indexOf("bank") >=0);
    const intArray = getHeaderArrayInt.filter(x => x.toLowerCase().indexOf("erp") >=0);
    let data1 = [], data2 = [];
    dataMajorInt.map(obj => {
      let k1: any = {};
      for (let key in obj) {
        if(_.includes(intArray, key)) {
          k1[key] = this.currencyFormatter(key, obj);
        }
      }      
      data1.push(k1);
    });
    dataMajorExt.map(obj => {
      let k2: any = {};
      for (let key in obj) {
        if(_.includes(extArray, key)) {
          k2[key] = this.currencyFormatter(key, obj);
        }
      }
      data2.push(k2);
    });
    return {
      data1,
      data2
    }
  }

  private currencyFormatter(key, obj): any {
    return !( key.toLowerCase().indexOf('amount') >=0 || key.toLowerCase().indexOf('balance') >=0 || key.toLowerCase().indexOf('debit') >=0  || key.toLowerCase().indexOf('credit') >=0  ) || obj[key] === null || isNaN(obj[key]) 
      ? obj[key]
      : obj[key].toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  }

  private exportAsExcelFile(d1, d2, fileName: string): void {
    const worksheet1: XLSX.WorkSheet = XLSX.utils.json_to_sheet(d1);
    const worksheet2: XLSX.WorkSheet = XLSX.utils.json_to_sheet(d2);
    const workbook: XLSX.WorkBook = { Sheets: { 'ERP Data': worksheet1, 'Bank Data': worksheet2 }, SheetNames: ['ERP Data', 'Bank Data'] };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.saveAsExcelFile(excelBuffer, fileName);
  }

  private exportAsPdfFile(data: any[], fileName) {
    if (data && data.length > 0) {
      const columns = this.getPdfHeader(data[0], fileName);
      const doc = new jsPDF('landscape', 'pt', 'a3');
      doc.autoTable(columns, data, {
        startY: false,
        tableWidth: 'wrap', // 'auto', 'wrap' or a number,
        styles: {
          overflow: 'ellipsize',
          fontSize: 10,
          columnWidth: 'wrap'
        },
        createdCell: function (cell, row) {
          if (cell.text[0] === 'null') {
            cell.text[0] = '';
          }
        },
      });
      doc.save(fileName + '_export_' + new Date().getTime() + PDF_EXTENSION);
    }

  }

  private saveAsExcelFile(buffer: any, fileName: string): void {
    const data: Blob = new Blob([buffer], { type: EXCEL_TYPE });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }

  private getRowsForExcel(dataInt, dataExt) {
    const cols = this.dashboardService.getGridColumntoDisplay();
    let getHeaderArrayInt, getHeaderArrayExt;
    const dataMajorInt = dataInt.map((a) => {
      const o = {};
      getHeaderArrayInt = [];
      cols.forEach((k) => {
        getHeaderArrayInt.push(k.headerName);
        o[k.headerName] = a[k.field];
      });
      return o;
    });
    const dataMajorExt = dataExt.map((a) => {
      const o = {};
      getHeaderArrayExt = [];
      cols.forEach((k) => {
        getHeaderArrayExt.push(k.headerName);
        o[k.headerName] = a[k.field];
      });
      return o;
    });
    return { dataMajorInt, dataMajorExt, getHeaderArrayInt, getHeaderArrayExt };
  }

  private getRows(data, name?: string) {
    const cols = (name && name.toLowerCase() === 'tobeposted' || name && name.toLowerCase() === 'posted') ? this.dashboardService.tobePostedGridColumntoDisplay() : this.dashboardService.getGridColumntoDisplay();
    const rows = data.map((a) => {
      const o = {};
      cols.forEach((k) => {
        o[k.field] = a[k.field];
      });
      return o;
    });
    return rows;
  }

  private getPdfHeader(firstRow, name?: string) {
    const columns = [];
    const keys = Object.keys(firstRow);
    const availableColumns = (name && name.toLowerCase() === 'tobeposted' || name && name.toLowerCase() === 'posted') ? this.dashboardService.getAvailableToBePostedColumns() : this.dashboardService.getAvailableGridColumns();
    keys.forEach((k) => {
      columns.push({
        title: availableColumns[k].title,
        dataKey: k
      });
    });
    return columns;
  }
}
