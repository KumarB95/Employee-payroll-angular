import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddEmployeeComponent } from "./add-employee/add-employee/add-employee.component"
// import {HeaderComponent} from "./component/header/header.component"
import { DashBoardComponent } from "./dash-board/dash-board.component";
// import { FormComponent } from "./demoform/form/form.component";


const routes :Routes=[
    {path: '', redirectTo:'dashboard', pathMatch:'full'},
    {path:'empForm', component:AddEmployeeComponent},
  //  {path:'empheader', component:HeaderComponent},
    {path:'dashboard', component:DashBoardComponent},
  //  {path:'demoform', component:FormComponent}
];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}
export const routingComponents = [AddEmployeeComponent]