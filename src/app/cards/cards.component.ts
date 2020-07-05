import { Component } from '@angular/core';
import{products} from './card';

@Component({
  selector: 'cards-section',
  templateUrl:'cards.component.html',
  styleUrls :['cards.component.scss']
   })

export class CardsComponent{ 
    product:products[];

  ngOnInit(){
    this.product = [{
      logo: "https://deplomatic-ui.s3.amazonaws.com/assets/logo/DMAPIM_New_logo.png" ,
      desc:"One platform that lets you optimize, monetize and accelerate your digital transformation initiative. It allows businesses to become platform enablers, grow profitable partnerships and build new channels to market.",
      ver:"v2.0.3"
    },
   
    {
      logo:"https://deplomatic-ui.s3.amazonaws.com/assets/logo/repopro.png",
      desc:"An enterprise repository tool to simplify storage & track your assets. Helps enterprises manage their assets through a unified, central repository using automation and a rich visualization of relationships between assets.",
      ver:"v3.8.1"
    },
    {
      logo : "https://deplomatic-ui.s3.amazonaws.com/assets/logo/autostub.png",
      desc:"An essential tool to speed up API development. It can significantly reduce your build time by quickly designing, prototyping, documenting and testing APIs.",
      ver:"v2.1"
    },
    {
      logo : "https://deplomatic-ui.s3.amazonaws.com/assets/logo/automaton.png",
      desc:"A test automation tool with a visual flow-chart-based design interface. It enables complete test automation of all components of an application - Web, APIs, Logs and Database Processes/Operations.",
      ver:"v2.5"
    }
    ]
  }
 }