import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-ng-for-component',
  templateUrl: './ng-for-component.component.html',
  styleUrls: ['./ng-for-component.component.css']
})
export class NgForComponentComponent implements OnInit {

  friends: any = [{"name": 'Lakshitha', "age": 24}, {"name": 'Madushan', "age": 25}, {"name": 'Tharindu', "age": 27}];

  constructor() {
  }

  ngOnInit() {
  }

}
