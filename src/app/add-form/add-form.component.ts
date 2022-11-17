import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private employeeService: EmployeeService
  ) {}

  form!: FormGroup;
  allRoles$ = this.employeeService.getAllRoles();
  employeeList: any;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this._fb.group({
      name: [''],
      address: [''],
      dob: [''],
      role: [null],
      phoneNumber: [],
      gender: [],
    });
  }

  onSubmit() {
    const employee: any = localStorage.getItem('employees');
    this.employeeList = JSON.parse(employee) ?? [];
    this.employeeList = [...this.employeeList, this.form.value];
    console.log('form', this.employeeList);
    localStorage.setItem('employees', JSON.stringify(this.employeeList));
  }
}
