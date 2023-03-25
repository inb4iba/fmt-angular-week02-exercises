import { Component, Input } from '@angular/core';

export interface CharacterInput {
  name: string;
  image: string;
  actorName: string;
  description: string;
}

@Component({
  selector: 'item-card',
  templateUrl: './item-card.component.html',
  styleUrls: ['./item-card.component.scss'],
})
export class ItemCardComponent {
  @Input() character: CharacterInput = {
    name: '',
    image: '',
    actorName: '',
    description: '',
  };
}
