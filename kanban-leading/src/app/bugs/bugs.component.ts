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
    this.bugs = [{ id: 1, name: "toto" }];
  }

  ngOnInit() {
    this.getBugs();
    //console.log("mon bug 1 est : " + this.bugs[0].name);
  }

  getBugs(): void {
    console.log("getBugs starts");
    this.bugService.printBugs();
    this.bugService.getBugs().then(myBugs => this.bugs = myBugs);
  }

  // add(name: string): void {
  //   name = name.trim();
  //   if (!name) { return; }
  //   this.heroService.create(name)
  //     .then(hero => {
  //       this.heroes.push(hero);
  //       this.selectedHero = null;
  //     });
  // }

}


