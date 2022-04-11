import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  constructor(private empService:EmployeeServiceService) { }

  ngOnInit(): void {
    this.getEmployees();
  }
  private getEmployees(){
    this.empService.getEmployeeList().subscribe(data=>{
      this.employees=data;
    })
  }

}
