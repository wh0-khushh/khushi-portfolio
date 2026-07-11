import { Component } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})

export class ExperienceComponent {

  company = {

    name: 'WorkSeer',

    tagline: 'Cloud-based Global Trade Management Platform'

  };

  journey = [

    {

      icon: 'school',

      date: 'October 2024',

      title: 'Technical Trainee',

      description:
        'Started my software development journey through structured technical training focused on frontend engineering and enterprise application development.',

      points: [

        'Angular Fundamentals',

        'TypeScript',

        'HTML5 & CSS3',

        'Responsive Web Development',

        'Component-Based Architecture',

        'Git & GitHub'

      ]

    },

    {

      icon: 'verified',

      date: 'June 2025',

      title: 'Technical Assessment',

      description:
        'Successfully cleared the technical assessment and interview process, leading to selection for the Frontend Developer Internship.'

    },

    {

      icon: 'work',

      date: 'July 2025 — Present',

      title: 'Frontend Developer Intern',

      description:
        'Contributing to enterprise Angular applications used for Global Trade Management while continuously improving frontend architecture and expanding backend knowledge.',

      points: [

        'Developing reusable Angular components',

        'Building responsive user interfaces',

        'Working with Angular Material',

        'Integrating REST APIs',

        'Version control with Git & GitHub',

        'Learning Java & Spring Boot for full-stack development'

      ]

    }

  ];

}