import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('video') video: any;

  player: any;

  playlist: any[] = [
    {
      sources: [
        {
          src: 'http://vjs.zencdn.net/v/oceans.mp4',
          type: 'video/mp4'
        }
      ],
      poster: 'http://vjs.zencdn.net/v/oceans.png'
    },
    {
      sources: [
        {
          src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
          type: 'video/mp4'
        }
      ],
      poster: 'http://media.w3.org/2010/05/bunny/poster.png'
    },
    {
      sources: [
        {
          src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
          type: 'video/mp4'
        }
      ],
      poster: 'http://media.w3.org/2010/05/sintel/poster.png'
    }
  ];

  constructor(private navCtrl: NavController, private navParams: NavParams) {}

  ionViewDidLoad() {
    this.player = this.video.player;
    this.player.playlist.currentItem(1);
    this.player.on(['loadstart', 'playlistchange', 'playlistsorted'], event => {
      console.log(this.player.playlist.currentItem());
    });
  }
}
