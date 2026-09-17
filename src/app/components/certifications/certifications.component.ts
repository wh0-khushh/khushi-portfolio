import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})
export class CertificationsComponent {

  certificates = [

    {
      title: 'Oracle Cloud Infrastructure Certified AI Foundations Associate',
      issuer: 'Oracle',
      type: 'Professional Certification',
      year: '2026',
      logo: 'assets/logos/oracleLogo.jpg',
      description:
        'Earned the Oracle Cloud Infrastructure Certified AI Foundations Associate certification, demonstrating foundational knowledge of AI and Oracle Cloud Infrastructure.',
      link:
        'https://catalog-education.oracle.com/pls/certview/sharebadge?id=9386314D9F3659202E01F3F72484B2424EAEB3A7DA4AD2DB2DF3BB30C4FE5677'
    },

    {
      title: 'UI / UX for Beginners',
      issuer: 'Great Learning',
      type: 'Course Certificate',
      year: '2026',
      logo: 'assets/logos/greatLearning.png',
      description:
        'Completed the UI / UX for Beginners online course offered by Great Learning Academy, covering foundational concepts in user interface and user experience design.',
      link:
        'https://www.mygreatlearning.com/certificate/DBPKEPKL'
    },

    {
      title: 'AWS For Beginners',
      issuer: 'Great Learning',
      type: 'Course Certificate',
      year: '2026',
      logo: 'assets/logos/greatLearning.png',
      description:
        'Completed the AWS For Beginners course covering cloud computing fundamentals, AWS basics, and core AWS services.',
      link:
        'https://www.mygreatlearning.com/certificate/MBJOXMXL'
    },

    {
      title: 'Describe Cloud Computing',
      issuer: 'Microsoft',
      type: 'Microsoft Learn Module',
      year: '2026',
      logo: 'assets/logos/microsoftLogo.png',
      description:
        'Successfully completed the Microsoft Learn module and earned a badge demonstrating foundational knowledge of cloud computing.',
      link:
        'https://learn.microsoft.com/en-us/users/khushikumari-0420/achievements/vschsejm'
    },

    {
      title: 'Introduction to Generative AI and Agents',
      issuer: 'Microsoft',
      type: 'Microsoft Learn Module',
      year: '2026',
      logo: 'assets/logos/microsoftLogo.png',
      description:
        'Successfully completed the Microsoft Learn module and earned a badge demonstrating foundational knowledge of generative AI and AI agent concepts.',
      link:
        'https://learn.microsoft.com/en-us/users/khushikumari-0420/achievements/wmktz5hn'
    },

    {
      title: 'Introduction to AI Concepts',
      issuer: 'Microsoft',
      type: 'Microsoft Learn Module',
      year: '2026',
      logo: 'assets/logos/microsoftLogo.png',
      description:
        'Successfully completed the Microsoft Learn module and earned a badge demonstrating foundational knowledge of artificial intelligence concepts.',
      link:
        'https://learn.microsoft.com/en-us/users/khushikumari-0420/achievements/bunrg8fd'
    },

    {
      title: 'Introduction to GitHub Copilot',
      issuer: 'Microsoft',
      type: 'Microsoft Learn Module',
      year: '2026',
      logo: 'assets/logos/microsoftLogo.png',
      description:
        'Successfully completed the Microsoft Learn module on GitHub Copilot, exploring AI-powered tools that support developer productivity and software development workflows.',
      link:
        'https://learn.microsoft.com/en-us/users/khushikumari-0420/achievements/fedtc2px'
    },

    {
      title: 'Skyscanner - Front-End Software Engineering',
      issuer: 'Forage',
      type: 'Job Simulation',
      year: '2026',
      logo: 'assets/logos/skyscanner.jpg',
      description:
        'Completed a front-end software engineering job simulation involving a React application, reusable components, the Skyscanner Backpack Design System, and automated testing.',
      link: '#'
    },

    {
      title: 'DATACOM - Software Development',
      issuer: 'Forage',
      type: 'Job Simulation',
      year: '2026',
      logo: 'assets/logos/datacom.png',
      description:
        'Completed software development tasks involving application review, bug identification, root-cause analysis, debugging, and implementing fixes.',
      link: '#'
    },

    {
      title: 'Deloitte - Data Analytics',
      issuer: 'Deloitte',
      type: 'Job Simulation',
      year: '2026',
      logo: 'assets/logos/deloitte.jpg',
      description:
        'Completed data analytics tasks involving business data analysis, analytical problem solving, and forensic technology scenarios.',
      link: '#'
    },

    {
      title: 'DATACOM - Cyber Security Operations',
      issuer: 'Forage',
      type: 'Job Simulation',
      year: '2026',
      logo: 'assets/logos/datacom.png',
      description:
        'Completed cybersecurity operations tasks involving ransomware incident analysis, risk evaluation, and security recommendations.',
      link: '#'
    },

    {
      title: 'Data Analytics Internship',
      issuer: 'Aminrup Technologies',
      type: 'Internship',
      year: '2026',
      logo: 'assets/logos/aminrup.jpg',
      description:
        'Completed a one-month Data Analytics Internship focused on practical analytics work and real-world datasets.',
      link: '#'
    },

    {
      title: 'TATA - GenAI Powered Data Analytics',
      issuer: 'Forage',
      type: 'Job Simulation',
      year: '2025',
      logo: 'assets/logos/tata.jpg',
      description:
        'Completed a job simulation focused on GenAI-powered data analytics, business insights, and data-driven decision making.',
      link: '#'
    },

    {
      title: 'AWS - Solutions Architecture',
      issuer: 'Forage',
      type: 'Job Simulation',
      year: '2025',
      logo: 'assets/logos/aws.jpg',
      description:
        'Completed a solutions architecture job simulation focused on cloud architecture and infrastructure design concepts.',
      link: '#'
    },

    {
      title: 'TATA - Data Visualisation',
      issuer: 'Forage',
      type: 'Job Simulation',
      year: '2025',
      logo: 'assets/logos/tata.jpg',
      description:
        'Completed a data visualisation job simulation focused on creating dashboards and communicating business insights through data.',
      link: '#'
    },

    {
      title: 'TATA - Cybersecurity Analyst',
      issuer: 'Forage',
      type: 'Job Simulation',
      year: '2025',
      logo: 'assets/logos/tata.jpg',
      description:
        'Completed cybersecurity analyst tasks involving identity and access management and security best practices.',
      link: '#'
    }

  ];

}