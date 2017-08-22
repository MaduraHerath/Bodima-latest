import { Component, OnInit } from '@angular/core';
import { province } from './province';
import { district } from './district';


@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
   
})
export class AddComponent implements OnInit {
  
  selectedValue: string;
  provinces = [
    {value: 'Northern', viewValue: 'Northern'},
    {value: 'Eastern', viewValue: 'Eastern'},
    {value: 'Central', viewValue: 'Central'},
    {value: 'North Central', viewValue: 'North Central'},
    {value: 'Uva', viewValue: 'Uva'},
    {value: 'Western', viewValue: 'Western'},
    {value: 'North Western', viewValue: 'North Western'},
    {value: 'Southern', viewValue: 'Southern'},
    {value: 'Sabaragamuwa', viewValue: 'Sabaragamuwa'}
  ];

  districts=[];
  constructor() { }

  ngOnInit() {
  }

}
