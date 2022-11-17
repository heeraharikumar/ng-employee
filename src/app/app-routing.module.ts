import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddFormComponent } from './add-form/add-form.component';
import { ListingPageComponent } from './listing-page/listing-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'add-form',
    pathMatch: 'full',
  },
  {
    path: 'add-form',
    component: AddFormComponent,
  },
  {
    path: 'listing',
    component: ListingPageComponent,
  },
  { path: "**", redirectTo: "dashboard" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
