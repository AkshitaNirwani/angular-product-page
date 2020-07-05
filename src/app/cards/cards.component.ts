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
      pname: "https://www.torryharris.com/modules/mod_product_portal/img/digitmarket.png" ,
      desc:"One platform that lets you optimize, monetize and accelerate your digital transformation initiative. It allows businesses to become platform enablers, grow profitable partnerships and build new channels to market.",
      imgs : "https://source.unsplash.com/Hx5vtx2e4KQ/1400x900"
    },
   
    {
      pname:"https://www.torryharris.com/modules/mod_product_portal/img/repopro.png",
      desc:"An enterprise repository tool to simplify storage & track your assets. Helps enterprises manage their assets through a unified, central repository using automation and a rich visualization of relationships between assets.",
       imgs:"https://source.unsplash.com/FUohNQatzVs/1400x900"
      
    },
    {
      pname : "https://www.torryharris.com/modules/mod_product_portal/img/iotglue.png",
      desc:"A mobile enabled IoT integration platform that allows enterprises to monetize IoT investments by seamlessly gluing disparate things together. It is an API driven robust technology framework with scalable, vertical-specific solutions.",
      imgs :"https://source.unsplash.com/JOEN3yxyD0g/1400x900"
      
    },
    {
      pname : "https://www.torryharris.com/modules/mod_product_portal/img/conceirgebank.png",
      desc:"A marketplace-banking product by Torry Harris that helps banks worldwide to offer innovative new products to customers through an API-driven marketplace solution and a simple user interface.",
     
      imgs:"https://source.unsplash.com/ex_p4AaBxbs/1400x900"
      
    },
    {
      pname : "https://www.torryharris.com/modules/mod_product_portal/img/autostub.png",
      desc:"An essential tool to speed up API development. It can significantly reduce your build time by quickly designing, prototyping, documenting and testing APIs.",
      imgs:"https://source.unsplash.com/xITnxxlzGAE/1400x900"
      
    },
    {
      pname : "https://www.torryharris.com/modules/mod_product_portal/img/automaton.png",
      desc:"A test automation tool with a visual flow-chart-based design interface. It enables complete test automation of all components of an application - Web, APIs, Logs and Database Processes/Operations.",
      imgs:"https://source.unsplash.com/LqKhnDzSF-8/1400x900"
      
    }
    ]
  }
 }