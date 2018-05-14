import { NgModule } from '@angular/core';
import{RouterModule,Routes} from '@angular/router';
import{DashboardComponent} from './dashboard/dashboard.component';
import{TeamInfoComponent} from './team-info/team-info.component'

const appRoutes : Routes=[
{path:'',redirectTo:'dashboard',pathMatch:'full'},
{path:'dashboard',component:DashboardComponent},
{path:'team-info/:id',component:TeamInfoComponent}
];
@NgModule({
  imports: [
   RouterModule.forRoot(
      appRoutes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
