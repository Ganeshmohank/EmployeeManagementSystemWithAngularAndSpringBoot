import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employee: Employee=new Employee();
  error=""
  constructor(private empService :EmployeeServiceService ,private router :Router) { 
    
    

  }
  goToEmpList(){
    this.router.navigate(['/employees']);
  }

  ngOnInit(): void {
   
  }
  onSubmit(){
    if(!!this.employee.email&&!!this.employee.firstname&&!!this.employee.lastname){
      this.empService.createEmployee(this.employee).subscribe(data=>{
        this.goToEmpList();
      },error=>console.log(error));
    }else{
      this.error="Null values are not accepted"
    }
    
    
  }

}
