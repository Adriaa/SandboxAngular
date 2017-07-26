import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { BugsComponent } from './bugs/bugs.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [
    { path: 'bugs', component: BugsComponent },
    { path: 'chart', component: ChartComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
