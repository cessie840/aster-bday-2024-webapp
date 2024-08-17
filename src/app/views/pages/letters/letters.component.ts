import { Component } from '@angular/core';
import { STAR_MESSAGES } from 'src/app/data/StarMessages';
import { StarMessageProps } from 'src/app/models/StarMessage';

@Component({
  selector: 'app-letters',
  templateUrl: './letters.component.html',
  styleUrls: ['./letters.component.scss']
})
export class LettersComponent {
  messages: readonly StarMessageProps[] = STAR_MESSAGES;
}
