import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MenuComponent} from './components/menu/menu.component';
import {HomeComponent} from './pages/home/home.component';
import {MatIconModule} from '@angular/material/icon';
import {HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MapComponent } from './components/map/map.component';
import { FooterComponent } from './components/footer/footer.component';
import { ImgViewerComponent } from './components/img-viewer/img-viewer.component';
import {OwlModule} from "ngx-owl-carousel";
import { OurWorkComponent } from './components/our-work/our-work.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CarouselModule} from "ngx-owl-carousel-o";
import { ServicesComponent } from './components/services/services.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PresentationSlideComponent } from './components/presentation-slide/presentation-slide.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import {MatExpansionModule} from "@angular/material/expansion";
import { EmployeesComponent } from './components/employees/employees.component';
import { TestComponent } from './components/test/test.component';
import { CallendarComponent } from './components/callendar/callendar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    MapComponent,
    FooterComponent,
    ImgViewerComponent,
    OurWorkComponent,
    ServicesComponent,
    NotFoundComponent,
    PresentationSlideComponent,
    GalleryComponent,
    EmployeesComponent,
    TestComponent,
    CallendarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    OwlModule,
    NgbModule,
    CarouselModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
