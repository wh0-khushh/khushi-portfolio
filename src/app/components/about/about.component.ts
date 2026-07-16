import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

highlights = [

{
icon:'design_services',
title:'Product Engineering',
subtitle:'Building thoughtful digital experiences'
},

{
icon:'web',
title:'Frontend Engineering',
subtitle:'Angular • TypeScript • Responsive UI'
},

{
icon:'architecture',
title:'Component Architecture',
subtitle:'Reusable, scalable Angular applications'
},

{
icon:'trending_up',
title:'Continuous Learning',
subtitle:'Java • Spring Boot • Software Engineering'
}

];

stats = [

{

value:'1+',

label:'Industry Internship'

},

{

value:'10+',

label:'Projects Built'

},

{

value:'8+',

label:'Certifications'

},

{

value:'2023',

label:'CSE Journey'

}

];

}