import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {HeaderComponent} from './global/header/header.component';
import {FooterComponent} from './global/footer/footer.component'
import {CardsComponent} from './cards/cards.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HeaderComponent , FooterComponent ,CardsComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
