import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
  id!: number;
  employee:Employee=new Employee();
  constructor(private empservice:EmployeeServiceService,private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    this.id=this.route.snapshot.params['id'];
    this.empservice.getById(this.id).subscribe(data=>{
      this.employee=data;
    },error=>console.log(error));

  }
  returnEmp(){
    this.router.navigate(["manage-employee"]);
  }

}
