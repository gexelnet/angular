import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root',
})
export class BlogsService {
  myPage = 0;
  cancel = false;

  private blogUrl =
    'http://thedietician.net/the-dietician/api/blogs?_format=json';

  constructor(private http: HttpClient) {}

  async getApp(): Promise<string> {
    if (this.cancel === true) {
      return '';
    } else {
      let value: any = await this.http
        .get(this.blogUrl + '&page=' + this.myPage).toPromise();

      if (JSON.stringify(value) === '[]') {
        this.cancel = true;
      }

      this.myPage++;

      return value;
    }
  }
}
