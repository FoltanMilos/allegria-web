import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material/icon';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'allegria-web';

  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer,
    public router: Router,
  ) {
    this.matIconRegistry.addSvgIcon('phone', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/phone.svg'));
    this.matIconRegistry.addSvgIcon('facebook', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/facebook.svg'));
    this.matIconRegistry.addSvgIcon('facebook2', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/facebook2.svg'));
    this.matIconRegistry.addSvgIcon('instagram', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/instagram.svg'));
    this.matIconRegistry.addSvgIcon('shopping-bag', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/shopping-bag.svg'));
    this.matIconRegistry.addSvgIcon('arrow-next', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/arrow-next.svg'));
    this.matIconRegistry.addSvgIcon('map-pointer', this.domSanitizer.bypassSecurityTrustResourceUrl('../assets/svg/map-pointer.svg'));
  }


}
