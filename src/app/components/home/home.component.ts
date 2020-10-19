import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http:HttpClient) { }
	APP_ID = "224efa3a";
  APP_KEY = "fb69ef518fc400afede708bc45c9545b";
  query='chicken'
  ngOnInit(): void {
    this.http.get(`https://api.edamam.com/search?q=${this.query}&app_id=${this.APP_ID}&app_key=${this.APP_KEY}`).subscribe(re=>{
      console.log(re.hits[0].recipe);

    })
  }

}
