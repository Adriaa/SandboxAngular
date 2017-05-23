import { Component } from '@angular/core';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroService } from './hero.service';

@Component(
    {
        selector: 'my-app',
        templateUrl: 'app.component.html',
        styleUrls: ['app.component.css'],
        providers: [HeroService]
    })
export class AppComponent {
    title = 'Tour of Heroes';
}