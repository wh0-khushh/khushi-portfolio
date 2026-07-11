import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent implements OnInit {

  technologies: string[] = [

    'Angular',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'Java',
    'Spring Boot',
    'SQL',
    'Git',
    'GitHub'

  ];

  roles: string[] = [

    'Software Engineer Student',
    'Frontend Developer Intern',
    'Angular Developer',
    'Full Stack Learner'

  ];

  currentRole = '';

  private roleIndex = 0;
  private charIndex = 0;
  private deleting = false;

  ngOnInit(): void {

    this.typeEffect();

  }

  typeEffect(): void {

    const current = this.roles[this.roleIndex];

    if (!this.deleting) {

      this.currentRole = current.substring(0, this.charIndex + 1);

      this.charIndex++;

      if (this.charIndex === current.length) {

        this.deleting = true;

        setTimeout(() => this.typeEffect(), 1500);

        return;

      }

    } else {

      this.currentRole = current.substring(0, this.charIndex - 1);

      this.charIndex--;

      if (this.charIndex === 0) {

        this.deleting = false;

        this.roleIndex++;

        if (this.roleIndex >= this.roles.length) {

          this.roleIndex = 0;

        }

      }

    }

    setTimeout(() => this.typeEffect(), this.deleting ? 45 : 85);

  }

}