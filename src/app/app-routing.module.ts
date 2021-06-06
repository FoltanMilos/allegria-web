import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './pages/home/home.component';
import {NotFoundComponent} from "./pages/not-found/not-found.component";
import {GalleryComponent} from "./components/gallery/gallery.component";
import {CallendarComponent} from "./components/callendar/callendar.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'galeria', component: GalleryComponent},
  { path: 'calendar', component: CallendarComponent},
  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
