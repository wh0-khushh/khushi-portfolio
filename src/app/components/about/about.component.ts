import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  highlights = [

    {
      icon: 'work',
      title: 'Frontend Development',
      subtitle: 'Building responsive Angular applications'
    },

    {
      icon: 'code',
      title: 'Modern Technologies',
      subtitle: 'Angular, TypeScript, JavaScript'
    },

    {
      icon: 'school',
      title: 'Continuous Learning',
      subtitle: 'Java, Spring Boot & Software Engineering'
    },

    {
      icon: 'verified',
      title: 'Professional Growth',
      subtitle: 'Internships, projects & certifications'
    }

  ];

  stats = [

    {
      value: '1+',
      label: 'Internship'
    },

    {
      value: '10+',
      label: 'Projects'
    },

    {
      value: '5+',
      label: 'Certificates'
    },

    {
      value: '2023',
      label: 'CSE Journey Started'
    }

  ];

}