import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeddingComponent} from "./wedding/wedding.component";
import { XvComponent } from "./xv/xv.component";
import { HomeComponent } from "./home/home.component";

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path: 'wedding', component: WeddingComponent},
  { path: 'xv', component: XvComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
