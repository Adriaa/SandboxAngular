import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { Bug } from "../bug/bug";
import { BugService } from "../bug.service";

@Component({
  selector: 'app-bugs',
  templateUrl: './bugs.component.html',
  styleUrls: ['./bugs.component.css']
})
export class BugsComponent implements OnInit, OnChanges {
  bugs: Bug[];
  @Input() ListChanges: boolean;
  constructor(private bugService: BugService) {

  }

  ngOnInit() {
    this.getBugs();
    this.ListChanges = false;
    console.log("on init : " + this.ListChanges);
  }

  ngOnChanges() {
    console.log("Bugscomponentchanging");
  }

  getBugs(): void {
    console.log("getBugs starts");
    this.bugService.printBugs();
    this.bugService.getBugs().then(myBugs => this.bugs = myBugs);
  }

  addBug(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.bugService.createBug(name).then(bug => { this.bugs.push(bug) });
  }

  deleteBug(bug: Bug): void {
    this.bugService.deleteBug(bug._id).then(() => this.bugs = this.bugs.filter(b => b !== bug));
  }

  getColor(status: string): string {
    if (status == 'new')
      return "green";
    else if (status == "en cours d'analyse")
      return "yellow";
    else
      return "";
  }
}



  //       this.selectedHero = null;
  //     });
  // }




