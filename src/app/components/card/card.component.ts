import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/service/Data/data-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  constructor(private service: DataServiceService) {}
  apiData;

  ngOnInit(): void {
    this.apiData = this.service.getData();
    this.service.setData([]);
    // console.log( "Card", this.apiData);
  }
}
