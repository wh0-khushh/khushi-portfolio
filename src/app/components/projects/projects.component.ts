import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent {

  featuredProject = {

    title: 'Aurelia Reserve',

    subtitle: 'Luxury Resort Booking Experience',

    image: 'assets/images/projects/aurelia-reserve.png',

    description:
      'A modern and responsive luxury resort landing page developed using Angular 14. The project focuses on reusable component architecture, elegant UI design, smooth user experience and responsive layouts across all screen sizes.',

    tech: [

      'Angular 14',

      'TypeScript',

      'HTML5',

      'CSS3',

      'JavaScript'

    ],

    features: [

      'Responsive Layout',

      'Hero Slideshow',

      'Reusable Components',

      'Modern UI Design',

      'Mobile Navigation',

      'Image Gallery'

    ],

    demo: 'https://aurelia-reserve.netlify.app',

    github: 'https://github.com/wh0-khushh/aurelia-reserve'

  };

}