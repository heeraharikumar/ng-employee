import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  constructor() {}

  getAllRoles(): Observable<any> {
    return of([
      {
        id: 0,
        value: 'Admin',
      },
      { id: 1, value: 'Manager' },
      { id: 2, value: 'HR' },
      { id: 3, value: 'Developer' },
    ]);
  }
}
