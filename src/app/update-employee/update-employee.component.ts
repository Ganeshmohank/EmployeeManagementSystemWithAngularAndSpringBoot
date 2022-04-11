import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employee: Employee=new Employee();
  id: number=1;
  constructor(private empService:EmployeeServiceService,private route:ActivatedRoute,private router:Router) { 
    
  }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.empService.getById(this.id).subscribe(data=>{
      console.log(data);
      this.employee=data;
    })
  }
  onSubmit(){
    this.empService.updateEmployee(this.id, this.employee).subscribe( data =>{
      this.goToEmployeeList();
    }
    , error => console.log(error));
  }
  goToEmployeeList(){
    this.router.navigate(['/manage-employee']);
  }
  
}
