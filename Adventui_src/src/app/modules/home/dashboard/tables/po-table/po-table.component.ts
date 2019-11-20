import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { GridOptions } from 'ag-grid-community';

@Component({
  selector: 'app-po-table',
  templateUrl: './po-table.component.html',
  styleUrls: ['./po-table.component.css']
})
export class PoTableComponent implements OnInit {

  private gridOptions: GridOptions;
  @Output() showflag: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
        this.gridOptions = <GridOptions>{};
        this.gridOptions.columnDefs = [
            {
                headerName: "sl no",
                field: "sl_no",
                width: 100
            },
            {
                headerName: "Po no",
                field: "Po_no",
                // cellRendererFramework: RedComponentComponent,
                width: 100
            },
            {
              headerName: "PO date",
              field: "PO_date",
              // cellRendererFramework: RedComponentComponent,
              width: 100
          },
            {
              headerName: "vendor code",
              field: "vendor_code",
              // cellRendererFramework: RedComponentComponent,
              width: 100
          },
          {
            headerName: "vendor name",
            field: "vendor_name",
            // cellRendererFramework: RedComponentComponent,
            width: 100
        },
          {
            headerName: "STIN number",
            field: "STIN_number",
            // cellRendererFramework: RedComponentComponent,
            width: 100
        },
        {
          headerName: "amount",
          field: "amount",
          // cellRendererFramework: RedComponentComponent,
          width: 100
      },
      {
        headerName: "cost center",
        field: "cost_center",
        // cellRendererFramework: RedComponentComponent,
        width: 100
    },
    {
      headerName: "delivery location",
      field: "delivery_location",
      // cellRendererFramework: RedComponentComponent,
      width: 100
  },
  {
    headerName: "purpose",
    field: "purpose",
    width: 100
},
{
  headerName: "category",
  field: "category",
  width: 100
},

        ];
        this.gridOptions.rowData = [
          {
            sl_no: "1",
            Po_no: "1",
            PO_date: "45342",
            vendor_code: "33454",
            vendor_name: "4354354",
            STIN_number: "45343453",
            amount: "43434354",
            cost_center: "5434354",
            delivery_location: "434434",
            purpose: "343434343",
            category: "543434"
        },
        {
          sl_no: "2",
          Po_no: "2",
          PO_date: "45342",
          vendor_code: "33454",
          vendor_name: "4354354",
          STIN_number: "45343453",
          amount: "43434354",
          cost_center: "5434354",
          delivery_location: "434434",
          purpose: "343434343",
          category: "543434"
      }
        ]
    }

  ngOnInit() {
  }
  onRowClicked(event: any) {
     console.log('row', event); 
     this.showflag.emit(event);
    }
onCellClicked(event: any) { console.log('cell', event); }
onSelectionChanged(event: any) { console.log("selection", event); }

}
