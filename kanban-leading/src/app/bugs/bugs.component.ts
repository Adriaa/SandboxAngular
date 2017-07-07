import { Component, OnInit, OnChanges } from '@angular/core';
import { Bug } from "../bug/bug";
import { BugService } from "../bug.service";

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit, OnChanges {
  bugs: Bug[];
  constructor(private bugService: BugService) {
    //this.bugs = [{ id: 1, name: "toto" }];
  }

  ngOnInit() {
    this.getBugs();
  }

  ngOnChanges() {
    console.log("Bugscomponentchanging");
    this.getBugs();
  }

  getBugs(): void {
    console.log("getBugs starts");
    this.bugService.printBugs();
    this.bugService.getBugs().then(myBugs => this.bugs = myBugs);
  }

  addBug(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bugService.createBug(name);
    this.getBugs();
  }

  deleteBug(bug: Bug): void {
    console.log(bug);
    this.bugService.deleteBug(bug._id);
    this.bugService.getBugs().then(myBugs => this.bugs = myBugs);
  }

}

  //       this.selectedHero = null;
  //     });
  // }




