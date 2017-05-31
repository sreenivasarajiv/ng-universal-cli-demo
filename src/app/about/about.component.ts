import { Component, OnInit } from '@angular/core';
import { Meta, Title } from "@angular/platform-browser";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(
    private meta : Meta,
    private title : Title
  ) { }

  ngOnInit() {

    this.title.setTitle('About Page');
    
    this.meta.updateTag({property : 'title', content : 'About Page'});
    this.meta.updateTag({property : 'description', content : 'About Description'});

  }

}
