import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'wedding-invitation';

  navigateMarriageLocation(){
    window.open('https://maps.app.goo.gl/QtK5CoSM8rTpPCDT7');
  }
  
  navigateReceptionLocation(){
    window.open('https://goo.gl/maps/8MbdY3jPAvK5gC698');
  }

}
