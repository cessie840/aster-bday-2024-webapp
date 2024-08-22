import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { FanartComponent } from './views/pages/fanart/fanart.component';
import { CreditsComponent } from './views/pages/credits/credits.component';
import { LettersComponent } from './views/pages/letters/letters.component';
import { ProjectsComponent } from './views/pages/projects/projects.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'fanart', component: FanartComponent },
  { path: 'letters', component: LettersComponent },
  { path: 'credits', component: CreditsComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
