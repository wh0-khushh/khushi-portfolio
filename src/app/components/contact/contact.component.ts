import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  resume = 'assets/resume/theResume.pdf';

  email = 'khushhiii143offc@gmail.com';

  emailLink = `mailto:${this.email}`;

  copied = false;

  contactInfo = [

    {
      icon: 'mail',
      title: 'Email',
      value: this.email,
      link: this.emailLink
    },

    {
      icon: 'call',
      title: 'Phone',
      value: '+91 85213 46569',
      link: 'tel:+918521346569'
    },

    {
      icon: 'location_on',
      title: 'Location',
      value: 'Jamshedpur, Jharkhand, India',
      link: 'https://maps.google.com/?q=Jamshedpur'
    },

    {
      icon: 'code',
      title: 'GitHub',
      value: 'github.com/wh0-khushh',
      link: 'https://github.com/wh0-khushh'
    },

    {
      icon: 'business_center',
      title: 'LinkedIn',
      value: 'linkedin.com/in/khushi-kumari',
      link: 'https://linkedin.com/in/khushi-kumari'
    }

  ];

  copyEmail(): void {

    navigator.clipboard.writeText(this.email);

    this.copied = true;

    setTimeout(() => {

      this.copied = false;

    }, 2000);

  }

}