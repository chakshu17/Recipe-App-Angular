import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  constructor() {}
  apiData: any;
  getData() {
    return this.apiData;
  }

  setData(data: any) {
    this.apiData = data;
  }
}
