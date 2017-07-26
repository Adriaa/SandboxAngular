import { Component, OnInit } from '@angular/core';
import { BugService } from "../bug.service";
import { Bug } from "../bug/bug";


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  data: Object;
  bugs: Bug[];

  constructor(private bugService: BugService) {
    this.bugService.getBugs().then(bugs => this.bugs = bugs);
    this.data = {
      piechart: {},
      data: [
        { value: 500 },
        { value: 600 },
        { value: 700 }
      ]
    };

  }

  ngOnInit() {
  }

}
