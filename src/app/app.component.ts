import { Component } from '@angular/core';
import { EmployeeService } from './service/employee.service';
import { UserDetails } from './service/user-details';
import { employee } from './service/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Employee_Pay_Roll';
  user: any;
  empDetailList: UserDetails[] = [];
  //  addEmp:employee[]=[];

  constructor(private employee: EmployeeService) { }
  ngOnInit() {
    this.employee.getUser().subscribe(data => {
      this.user = data;
      this.empDetailList = this.user.employeePayrollDataList;
      console.log(this.empDetailList);
    });
  }
}





