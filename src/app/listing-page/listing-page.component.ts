import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listing-page',
  templateUrl: './listing-page.component.html',
  styleUrls: ['./listing-page.component.scss'],
})
export class ListingPageComponent implements OnInit {
  constructor() {}
  cols: any;
  data: any;

  ngOnInit(): void {
    this.cols = [
      { field: 'name', header: 'Name' },
      { field: 'address', header: 'Address' },
      { field: 'dob', header: 'Dob' },
      { field: 'role', header: 'Role' },
      { field: 'phoneNumber', header: 'Phone' },
      { field: 'gender', header: 'Gender' },
    ];
    const employee: any = localStorage.getItem('employees');
    this.data = JSON.parse(employee) ?? [];
  }

  eval(rowData: any, field: any) {
    if (rowData) {
      if (field === 'gender') {
        return rowData[field] === 'M' ? 'Male' : 'Female';
      }
      else {
        return eval(`rowData.${field}`);
      }
    }
  }
}
