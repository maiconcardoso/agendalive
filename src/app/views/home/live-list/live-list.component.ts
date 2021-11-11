import { Component, OnInit } from '@angular/core';
import { Live } from 'src/app/shared/model/live.model';
import { LiveService } from 'src/app/shared/service/live.service';

@Component({
  selector: 'app-live-list',
  templateUrl: './live-list.component.html',
  styleUrls: ['./live-list.component.css']
})
export class LiveListComponent implements OnInit {

  livePrevious: Live[] = [];

  constructor(
    public liveservice: LiveService 
  ) { }

  ngOnInit(): void {
    this.getLives();
  }

  getLives() {
    this.liveservice.getLives().subscribe(data => {
      this.livePrevious = data;
      console.log(this.livePrevious);
    });
  }

}
