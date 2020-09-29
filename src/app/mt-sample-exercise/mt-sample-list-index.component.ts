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
        const selectedrowindex: number[] = this.grid.getSelectedRowIndexes();
        // console.log('get-index', JSON.stringify((this.grid.dataSource as object[])[selectedrowindex]))
        this.selectedItem = (this.grid.dataSource as object[])[selectedrowindex];
        this.selectedFarmService.setSelection(this.selectedItem);
    }

    onFilterChange(event) {
      // console.log('filter-change', event?.target?.value);
      switch(event?.target?.value) {
        case '2':
        this.dataService.getFarmsByNo();
        break;
        case '3':
        this.dataService.getFarmsByDate();
        break;
        default:
        this.dataService.getFarms();
      }
      this.selectedFarmService.setSelection(null);
    }



}