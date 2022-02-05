import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  Day=["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31"];
  Month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
  Year=["2016","2017","2018","2019","2020","2021","2022"];
   Salary=[10000,15000,20000,25000,30000,35000,40000];
  name: String="";
  gender: String="";
  department:any="";
  salary: String="";
 // startDate:String="";
  day:String="";
  month:String="";
  year:String="";
  note: String="";
  profilePic:String="";

  signupForm: any;
   //startDate:any;

  
  constructor(private formBuilder:FormBuilder ){
    this.signupForm=formBuilder.group({
      name:new FormControl(),
      gender: new FormControl(),
      department:new FormControl(),
      salary:new FormControl(),
      startDate:new FormControl(),
      // day:new FormControl(),
      // month:new FormControl(),
      // year:new FormControl(),
      note:new FormControl(),
      profilePic:new FormControl()
    });  
  }
   startDate=`this.day.getDate()`+ `this.day.getMonth()`+ `this.day.getFullYear()`;
  // addEmp:PostService[]=[]; 
  ngOnInit(): void {
    
  }

  PostData(signupForm : any){
    signupForm=JSON.stringify(signupForm.value);
    console.log(signupForm);
  }

  // dateMerge(e:any){
  //   // console.log(e.targer.value);
  //   // this.day.setValue(e.targer.value,{onlySelf:true})
  // }

  // addNewEmp(addEmpForm:any){
  //   console.log(JSON.stringify(addEmpForm.value));
  //   this.addEmp=(addEmpForm.value);
  //   this.employee.createEmp(this.addEmp).subscribe(data =>{this.addEmp});
  // }
  // }
    // console.log(this.startDate); 
}
  


