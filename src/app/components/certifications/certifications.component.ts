import { Component } from '@angular/core';

@Component({
  selector: 'app-certifications',
  templateUrl: './certifications.component.html',
  styleUrls: ['./certifications.component.css']
})

export class CertificationsComponent {

 certificates = [

{
title:'Oracle Cloud Infrastructure AI Foundations Associate',
issuer:'Oracle',
type:'Professional Certification',
year:'2026',
logo:'assets/logos/oracleLogo.jpg',
description:'Successfully earned the Oracle Cloud Infrastructure (OCI) Certified AI Foundations Associate certification issued by Oracle University.',
link:'https://https://catalog-education.oracle.com/ords/certview/sharebadge?id=9386314D9F3659202E01F3F72484B2424EAEB3A7DA4AD2DB2DF3BB30C4FE5677',
},

{
title:'Skyscanner - Front-End Software Engineering',
issuer:'Forage',
type:'Job Simulation',
year:'2026',
logo:'assets/logos/skyscanner.jpg',
description:'Built a React application using Skyscanner Backpack Design System, reusable components and automated testing.',
link:'#'
},

{
title:'DATACOM - Software Development',
issuer:'Forage',
type:'Job Simulation',
year:'2026',
logo:'assets/logos/datacom.png',
description:'Reviewed applications, identified bugs and implemented fixes following real-world software development workflows.',
link:'#'
},

{
title:'Deloitte - Data Analytics',
issuer:'Deloitte',
type:'Job Simulation',
year:'2026',
logo:'assets/logos/deloitte.jpg',
description:'Performed business data analysis, dashboard creation and forensic technology tasks using real-world scenarios.',
link:'#'
},

{
title:'TATA - GenAI Powered Data Analytics',
issuer:'Forage',
type:'Job Simulation',
year:'2025',
logo:'assets/logos/tata.jpg',
description:'Worked on AI-powered analytics, business insights and data-driven decision making.',
link:'#'
},

{
title:'AWS - Solutions Architecture',
issuer:'Forage',
type:'Job Simulation',
year:'2025',
logo:'assets/logos/aws.jpg',
description:'Completed architecture design tasks and learned cloud infrastructure fundamentals.',
link:'#'
},

{
title:'DATACOM - Cyber Security Operations',
issuer:'Forage',
type:'Job Simulation',
year:'2026',
logo:'assets/logos/datacom.png',
description:'Investigated ransomware incidents, evaluated risks and recommended cybersecurity solutions.',
link:'#'
},

{
title:'TATA - Data Visualisation',
issuer:'Forage',
type:'Job Simulation',
year:'2025',
logo:'assets/logos/tata.jpg',
description:'Created executive dashboards and transformed business data into meaningful visual insights.',
link:'#'
},

{
title:'TATA - Cybersecurity Analyst',
issuer:'Forage',
type:'Job Simulation',
year:'2025',
logo:'assets/logos/tata.jpg',
description:'Completed enterprise cybersecurity tasks involving IAM and security best practices.',
link:'#'
},

{
title:'Data Analytics Internship',
issuer:'Aminrup Technologies',
type:'Internship',
year:'2026',
logo:'assets/logos/aminrup.jpg',
description:'Completed one-month Data Analytics Internship working on practical business analytics and real-world datasets.',
link:'#'
}

];

}