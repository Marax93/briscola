import { Component, Input } from '@angular/core';

@Component({
  selector: 'briscola-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  @Input() imagePath!: string;
  @Input() applyHover: boolean = false;
}
