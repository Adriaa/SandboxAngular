import { Component, OnInit } from '@angular/core';
import { Bug } from './bug';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent implements OnInit {
  bug: Bug;
  constructor() { }

  ngOnInit() {
  }

}
