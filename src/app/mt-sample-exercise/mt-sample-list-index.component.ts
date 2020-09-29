import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { SelectedFarmService } from './selected-farm.service';
import { Observable, Subject } from 'rxjs';
import { takeUntil, map } from 'rxjs/operators';
import { Farm } from './farm';

@Component({
  selector: 'mt-sample-list',
  templateUrl: './mt-sample-list-index.component.html'
})
export class MtSampleListIndexComponent implements OnInit {

   public pageSettings: any;

  constructor(public dataService: DataService) {

  }

  ngOnInit(): void {
    this.dataService.getFarms();
    this.pageSettings = { pageSize: 6 };
  }



}