import { Component } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent {

  skillCategories = [

    {

      title: 'Frontend',

      icon: 'web',

      skills: [

        'Angular',

        'TypeScript',

        'JavaScript',

        'HTML5',

        'CSS3',

        'Angular Material',

        'RxJS',

        'Responsive Design'

      ]

    },

    {

      title: 'Backend & APIs',

      icon: 'dns',

      skills: [

        'REST APIs',

        'Java',

        'Spring Boot'

      ]

    },

    {

      title: 'Tools & Platforms',

      icon: 'build',

      skills: [

        'Git',

        'GitHub',

        'VS Code',

        'Postman',

        'npm',

        'Netlify'

      ]

    },

    {

      title: 'Currently Learning',

      icon: 'school',

      skills: [

        'Spring Boot',

        'Advanced Angular',

        'Microservices',

        'Data Structures',

        'System Design'

      ]

    }

  ];

}