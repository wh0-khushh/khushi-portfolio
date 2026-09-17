import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  highlights = [
    {
      icon: 'web',
      title: 'Frontend Engineering',
      subtitle: 'Angular • TypeScript • Responsive UI'
    },
    {
      icon: 'design_services',
      title: 'Thoughtful UI',
      subtitle: 'Responsive and user-friendly web experiences'
    },
    {
      icon: 'architecture',
      title: 'Component Architecture',
      subtitle: 'Reusable Angular components and clean structure'
    },
    {
      icon: 'trending_up',
      title: 'Continuous Learning',
      subtitle: 'Java • Spring Boot • Software Engineering'
    }
  ];

  stats = [
    {
      value: '1+',
      label: 'Years of Training & Internship'
    },
    {
      value: '1',
      label: 'Featured Project'
    },
    {
      value: '16',
      label: 'Credentials & Certifications'
    },
    {
      value: '2023',
      label: 'CSE Journey'
    }
  ];

}