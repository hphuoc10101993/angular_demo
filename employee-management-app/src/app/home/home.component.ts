import { Component, OnInit } from '@angular/core';
import {Employee} from './employee';
import {EmployeeService} from '../employee.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  addEmployee() {
    this.employeeService.addEmployee();
  }

  deleteEmployee(employee: Employee) {
    this.employeeService.deleteEmployee(employee);
  }

  searchEmployee() {
    this.employeeService.searchEmployee();
  }
}
