import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  constructor() { }
  apiData:any;
  getData(){
    console.log('Heloo',this.apiData);
  }

  setData(data:any){
    this.apiData=data
    console.log(this.apiData);
  }
}
