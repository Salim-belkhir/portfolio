import { Component, OnInit } from '@angular/core';
// @ts-ignore
import * as feather from 'feather-icons';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.scss']
})
export class SideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(){
    feather.replace();
  }


}
