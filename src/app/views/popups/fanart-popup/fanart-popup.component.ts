import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FanArtDetails } from 'src/app/data/FanArt';

@Component({
  selector: 'app-fanart-popup',
  templateUrl: './fanart-popup.component.html',
  styleUrl: './fanart-popup.component.scss'
})
export class FanartPopupComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA)
    public data: {details: FanArtDetails},
  ) {

  }
}
