import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
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
  number=[1,2,3,4,5]
  ngOnInit(): void {
    // this.http
    //   .get(
    //     `https://api.edamam.com/search?q=${this.query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`
    //   )
    //   .subscribe((re) => {
    //     this.data = re.hits;
    //     console.log(this.data);
    //   });


    // this.service.getData()
  }
  fetchData(){
    this.service.setData(this.data)
  }
}

