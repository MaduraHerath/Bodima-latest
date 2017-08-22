import { Component, OnInit, NgModule } from '@angular/core';
import {MdToolbarModule,MdToolbarRow } from '@angular/material';

@NgModule({
    imports: [
    MdToolbarModule,
    MdToolbarRow,
    
      ],
exports: [MdToolbarModule,MdToolbarRow],
})
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

