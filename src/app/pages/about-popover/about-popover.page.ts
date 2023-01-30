import { Component } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-about-popover',
  templateUrl: './about-popover.page.html',
})
export class AboutPopoverPage {

  constructor(public popoverCtrl: PopoverController) {}

  support() {
    this.popoverCtrl.dismiss();
  }

  close(url: string) {
    window.open(url, '_blank');
    this.popoverCtrl.dismiss();
  }

}
