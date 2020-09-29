import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { Farm } from './farm';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html'
})
export class MtSampleListIndexComponent implements OnInit {

   public pageSettings: any;
   public selectedItem: any;

  @ViewChild('grid') public grid: GridComponent; 

  constructor(
    public dataService: DataService,
    private selectedFarmService: SelectedFarmService
    ) {
  }

  ngOnInit(): void {
    this.dataService.getFarms();
    this.pageSettings = { pageSize: 6 };
  }

   rowSelected(event) {
        const selectedrowindex: number[] = this.grid.getSelectedRowIndexes();  // Get the selected row indexes.
        // alert(selectedrowindex); // To alert the selected row indexes.
        // const selectedrecords: object[] = this.grid.getSelectedRecords();  // Get the selected records.
        console.log('get-index', JSON.stringify((this.grid.dataSource as object[])[selectedrowindex]))
        this.selectedItem = (this.grid.dataSource as object[])[selectedrowindex];
        this.selectedFarmService.setSelection(this.selectedItem);
    }



}