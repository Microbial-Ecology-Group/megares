import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrowseComponent } from './browse/browse.component';
import { ClassComponent } from './class/class.component';
import { DashboardComponent } from './dashboard.component';
import { GroupComponent } from './group/group.component';
import { MechanismComponent } from './mechanism/mechanism.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent,
    children: [
      {path: '', component: BrowseComponent},
      {path: ':classdesc', component: ClassComponent},  
      {path: ':classdesc/:mechanismdesc', component: MechanismComponent},
      {path: ':classdesc/:mechanismdesc/:groupdesc', component: GroupComponent},
    ]    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
