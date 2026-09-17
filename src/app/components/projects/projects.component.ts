import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {

  featuredProject = {

    title: 'Aurelia Reserve',

    subtitle: 'Luxury Resort Landing Page',

    image: 'assets/images/projects/aurelia-reserve.png',

    description:
      'A responsive luxury resort landing page developed using Angular 14 and TypeScript, featuring reusable components, responsive navigation, a hero slideshow, interactive image gallery, and mobile-friendly layouts.',

    tech: [

      'Angular 14',

      'TypeScript',

      'HTML5',

      'CSS3',

      'JavaScript',

      'Git',

      'Netlify'

    ],

    features: [

      'Responsive Layout',

      'Reusable Components',

      'Responsive Navigation',

      'Hero Slideshow',

      'Mobile Navigation',

      'Image Gallery'

    ],

    demo: 'https://aurelia-reserve.netlify.app',

    github: 'https://github.com/wh0-khushh/aurelia-reserve'

  };

}