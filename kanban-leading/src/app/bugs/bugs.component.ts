import { Component, OnInit } from '@angular/core';
import { Bug } from "../bug/bug";
import { BugService } from "../bug.service";

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit {
  bugs: Bug[];

  constructor(private bugService: BugService) {
    this.getBugs();
  }

  ngOnInit() {
    this.getBugs();
  }

  getBugs(): void {
    console.log("getBugs starts");
    this.bugService.getBugs().then(bugs => this.bugs = bugs);

  }

  addBug(name: string, source: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bugService.createBug(name, source).then(bug => this.bugs.push(bug));

  }

  deleteBug(bug: Bug): void {
    this.bugService.deleteBug(bug).then(() => this.bugs = this.bugs.filter(b => b != bug));

  }

  getColor(status: string): string {
    if (status == 'new')
      return "table-success";
    else if (status == "en cours d'analyse")
      return "table-warning";
    else
      return "";
  }
}



  //       this.selectedHero = null;
  //     });
  // }




