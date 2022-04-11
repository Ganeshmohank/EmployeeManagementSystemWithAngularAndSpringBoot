import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  employees:Employee[]=[];
  constructor(private empService:EmployeeServiceService,private router:Router) { 
    this.empService.getEmployeeList().subscribe(data => 
      this.employees = data);
  }

  ngOnInit(): void {
  }
  //must add this for page to auto update
  private getEmployees(){
    this.empService.getEmployeeList().subscribe(data => {
      this.employees = data;
    });
  }
  deleteEmp(id:number){
    this.empService.deleteEmployee(id).subscribe( data=>{
      console.log(data);
      this.getEmployees();
    },error=>console.log(error));
    console.log(id);
  }
  updateEmployee(id:number){
    this.router.navigate(['update-employee',id])
  }
  viewEmployee(id:number){
    this.router.navigate(["view-employee",id]);
  }

}
