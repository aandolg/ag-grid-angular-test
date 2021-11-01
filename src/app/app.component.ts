import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';

import { Select2OptionData } from 'ng-select2';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    this.exampleData = [
      {
        id: 'basic1',
        text: 'Basic 1',
      },
      {
        id: 'basic2',
        disabled: true,
        text: 'Basic 2',
      },
      {
        id: 'basic3',
        text: 'Basic 3',
      },
      {
        id: 'basic4',
        text: 'Basic 4',
      },
    ];
    console.log(this.exampleData);
  }

  public value = null;

  @ViewChild('agGrid') myGrid!: AgGridAngular;
  public headerCheckbox: boolean = true;
  columnDefs = [
    {
      field: 'make',
      headerCheckboxSelection: this.headerCheckbox,
      checkboxSelection: true,
    },
    { field: 'model' },
    { field: 'price' },
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
  ];

  public exampleData: Array<Select2OptionData>;

  getSelectedRows() {
    this.myGrid.columnDefs[0].headerCheckboxSelection = false;
    console.log(this.myGrid.api.getVirtualRowCount());
    this.myGrid.api.refreshHeader();

    // const selectedNodes = this.myGrid.api.getSelectedNodes();
    // console.log(selectedNodes);

    // const selectedData = selectedNodes.map((node) => node.data);
    // const selectedDataStringPresentation = selectedData
    //   .map((node) => {
    //     return `${node.make} ${node.model}`;
    //   })
    //   .join(', ');
    // alert(`Selected nodes: ${selectedDataStringPresentation}`);
  }

  onRowSelected(params) {
    if (params.api.getSelectedRows() == 0) {
      console.log(params.api.getSelectedRows().length);
    }
  }

  onSelectionChanged(params) {
    // console.log(params);
  }
}
