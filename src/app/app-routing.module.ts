import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './views/pages/home/home.component';
import { FanartComponent } from './views/pages/fanart/fanart.component';
import { CreditsComponent } from './views/pages/credits/credits.component';
import { LettersComponent } from './views/pages/letters/letters.component';
import { LandingComponent } from './views/pages/landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
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
