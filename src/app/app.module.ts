import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import {MdButtonModule, MdCheckboxModule} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import 'hammerjs';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AddComponent } from './add/add.component';
import {MdSelectModule} from '@angular/material';
import { SearchComponent } from "./search/search.component";
/*Routes*/
export const appRoute: Routes = [
{path: '' , component: HomeComponent} ,
{ path: 'add',      component: AddComponent },
{ path: 'search',      component: SearchComponent },
]
@NgModule({
  
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    AddComponent,
    SearchComponent
  ],
  imports: [MdSelectModule, BrowserModule,MdButtonModule, MdCheckboxModule,BrowserAnimationsModule,RouterModule.forRoot(appRoute), ],
  exports: [MdSelectModule,MdButtonModule, MdCheckboxModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoute);

