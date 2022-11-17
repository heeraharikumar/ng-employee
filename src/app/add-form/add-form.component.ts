import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  constructor(
    private _fb: FormBuilder,
    private employeeService: EmployeeService,
    private messageService: MessageService
  ) {}

  form!: FormGroup;
  allRoles$ = this.employeeService.getAllRoles();
  employeeList: any;

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.form = this._fb.group({
      name: ['', [Validators.required]],
      address: ['', [Validators.required]],
      dob: ['', [Validators.required]],
      role: [null, [Validators.required]],
      phoneNumber: ['', [Validators.required]],
      gender: [null, [Validators.required]],
    });
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.form.updateValueAndValidity();
    } else {
      const employee: any = localStorage.getItem('employees');
      this.employeeList = JSON.parse(employee) ?? [];
      this.employeeList = [...this.employeeList, this.form.value];
      localStorage.setItem('employees', JSON.stringify(this.employeeList));
      this.messageService.add({
        severity: 'Success',
        summary: 'Employee Created Successfully',
        detail: ``,
        life: 4500,
      });
      this.form.reset();
    }
  }
}
