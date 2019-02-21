import { Injectable } from '@angular/core';
import {Employee} from './home/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  employees: Employee[] = [];
  itemEmployee = new Employee();
  nameSearch: string;

  constructor() { }

  addEmployee() {
    const employee = new Employee();
    employee.id = 1;
    if (this.employees.length > 0) {
      employee.id = this.employees[this.employees.length - 1].id + 1;
    }
    employee.name = this.itemEmployee.name;
    employee.phone = this.itemEmployee.phone;
    employee.address = this.itemEmployee.address;
    employee.gender = this.itemEmployee.gender;
    this.employees.push(employee);
    this.itemEmployee = new Employee();
  }

  deleteEmployee(employee: Employee) {
    const index: number = this.employees.indexOf(employee);
    if (index !== -1) {
      this.employees.splice(index, 1);
    }
  }

  searchEmployee() {
    if (this.nameSearch === '') {
      return;
    }
    this.employees = this.employees.filter(emp => emp.name === this.nameSearch);
  }
}
