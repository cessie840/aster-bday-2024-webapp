import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/pages/home/home.component';
import { FanartComponent } from './views/pages/fanart/fanart.component';
import { CreditsComponent } from './views/pages/credits/credits.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { TitleLogoComponent } from './views/shared/title-logo/title-logo.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TopNavComponent } from './views/shared/top-nav/top-nav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { SideNavComponent } from './views/shared/side-nav/side-nav.component';
import { LettersComponent } from './views/pages/letters/letters.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { StarMessagePopupComponent } from './views/popups/star-message-popup/star-message-popup.component';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FanartComponent,
    CreditsComponent,
    TitleLogoComponent,
    TopNavComponent,
    SideNavComponent,
    LettersComponent,
    StarMessagePopupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatDialogModule,
    MatTooltipModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
