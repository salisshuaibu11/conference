import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

import { AboutPopoverPage } from '../about-popover/about-popover.page';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {
  location = 'madison';
  conferenceDate = '2047-05-17';

  selectOptions = {
    header: 'Select a Location'
  }

  constructor(
    public popoverCtrl: PopoverController
  ) { }

  async presentPopover(event: Event) {
    const popover = await this.popoverCtrl.create({
      component: AboutPopoverPage,
      event
    });

    await popover.present();
  }

}
