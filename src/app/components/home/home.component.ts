import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { DataServiceService } from '../../service/Data/data-service.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private service: DataServiceService) {}
  data: any;
  APP_ID = '224efa3a';
  APP_KEY = 'fb69ef518fc400afede708bc45c9545b';
  query = 'chicken';
  card: boolean = false;
  ngOnInit(): void {

  }
  fetchData(f:NgForm) {
    // this.http
    //   .get(
    //     `https://api.edamam.com/search?q=${this.query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`
    //   )
    //   .subscribe((re) => {
    //     this.data = re.hits;
    //     console.log(this.data);
    //   });
    console.log("home after enter",f.value.foodItem);

    this.service.setData(f.value.foodItem);
    this.card = true;
  }
}
