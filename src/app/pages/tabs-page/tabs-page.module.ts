import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabsPagePageRoutingModule } from './tabs-page-routing.module';

import { TabsPagePage } from './tabs-page.page';
import { AboutPageModule } from '../about/about.module';
import { SpeakerListPageModule } from '../speaker-list/speaker-list.module';

@NgModule({
  imports: [
    AboutPageModule,
    CommonModule,
    FormsModule,
    IonicModule,
    SpeakerListPageModule,
    TabsPagePageRoutingModule
  ],
  declarations: [TabsPagePage]
})
export class TabsPagePageModule {}
