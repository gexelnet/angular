import { Component, OnInit } from '@angular/core';

import { Blog } from './blog';

import { BlogsService } from './blogs.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
})
export class BlogsComponent implements OnInit {

  blogs: Blog[] = [];

  items: any[] = [];

  constructor(
    private blogsService: BlogsService
  ) {}

  ngOnInit() {
     this.addMoreItems();
  }

  loadData(event: any) {

    setTimeout(() => {
      this.items.push(...[this.blogs]);
      this.addMoreItems();
      event.target.complete();
    }, 500);
  }
  async addMoreItems() {
    try {
      let response = await this.blogsService.getApp();
      let regex: any = JSON.stringify(response);
      regex = JSON.parse(regex);
      this.items.push(...[regex]);
    } catch (error) {
      // error details
      console.error(error);
    }
  }
}
