import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  loading = true;

  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {

    // Loader
    setTimeout(() => {
      this.loading = false;
    }, 1800);

    // SEO Title
    this.title.setTitle(
      'Khushi Kumari | Software Engineer | Angular Developer'
    );

    // SEO Meta Tags
    this.meta.addTags([

      {
        name: 'description',
        content:
          'Portfolio of Khushi Kumari, Computer Science Engineering student, Frontend Developer Intern and Angular Developer.'
      },

      {
        name: 'keywords',
        content:
          'Khushi Kumari, Angular Developer, Software Engineer, Frontend Developer, Java, Spring Boot, Portfolio'
      },

      {
        name: 'author',
        content: 'Khushi Kumari'
      }

    ]);

  }

}