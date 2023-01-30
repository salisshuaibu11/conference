import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ConferenceData } from 'src/app/providers/conference-data';

@Component({
  selector: 'app-speaker-detail',
  templateUrl: './speaker-detail.page.html',
  styleUrls: ['./speaker-detail.page.scss'],
})
export class SpeakerDetailPage {
  speaker: any;

  constructor(
    private dataProvider: ConferenceData,
    private route: ActivatedRoute,
    public confData: ConferenceData,
  ) { }

  ionViewWillEnter() {
    this.dataProvider.load().subscribe((data: any) => {
      const speakerId = this.route.snapshot.paramMap.get('speakerId');

      if (data && data.speakers) {
        for (const speaker of data.speakers) {
          if (speaker && speaker.id === speakerId) {
            this.speaker = speaker;
            break;
          }
        }
      }
    })
  }

  openExternalUrl(url: string) {
    console.log(url);
    // this.inAppBrowser.create(
    //   url,
    //   '_blank'
    // )
  }

}
