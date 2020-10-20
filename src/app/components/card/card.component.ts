import { Component, OnDestroy, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/Data/data-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit,OnDestroy {
  constructor(private service: DataServiceService) {}
  apiData;

  ngOnInit(): void {
    this.apiData = this.service.getData();
    // console.log( "Card", this.apiData);
  }
  ngOnDestroy(){
    this.service.setData(null)
  }
}
