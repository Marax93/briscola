import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'briscola';

  protected cards = [
    { imagePath: 'assets/neapolitan-cards/bastoni1.png' },
    { imagePath: 'assets/neapolitan-cards/bastoni2.png' },
    { imagePath: 'assets/neapolitan-cards/bastoni3.png' },
    { imagePath: 'assets/neapolitan-cards/bastoni4.png' },
    { imagePath: 'assets/neapolitan-cards/bastoni5.png' },
    { imagePath: 'assets/neapolitan-cards/bastoni6.png' },
    { imagePath: 'assets/neapolitan-cards/bastoni7.png' },
    { imagePath: 'assets/neapolitan-cards/bastoni8.png' },
    { imagePath: 'assets/neapolitan-cards/bastoni9.png' },
    { imagePath: 'assets/neapolitan-cards/bastoni10.png' },
    { imagePath: 'assets/neapolitan-cards/coppe1.png' },
    { imagePath: 'assets/neapolitan-cards/coppe2.png' },
    { imagePath: 'assets/neapolitan-cards/coppe3.png' },
    { imagePath: 'assets/neapolitan-cards/coppe4.png' },
    { imagePath: 'assets/neapolitan-cards/coppe5.png' },
    { imagePath: 'assets/neapolitan-cards/coppe6.png' },
    { imagePath: 'assets/neapolitan-cards/coppe7.png' },
    { imagePath: 'assets/neapolitan-cards/coppe8.png' },
    { imagePath: 'assets/neapolitan-cards/coppe9.png' },
    { imagePath: 'assets/neapolitan-cards/coppe10.png' },
    { imagePath: 'assets/neapolitan-cards/denara1.png' },
    { imagePath: 'assets/neapolitan-cards/denara2.png' },
    { imagePath: 'assets/neapolitan-cards/denara3.png' },
    { imagePath: 'assets/neapolitan-cards/denara4.png' },
    { imagePath: 'assets/neapolitan-cards/denara5.png' },
    { imagePath: 'assets/neapolitan-cards/denara6.png' },
    { imagePath: 'assets/neapolitan-cards/denara7.png' },
    { imagePath: 'assets/neapolitan-cards/denara8.png' },
    { imagePath: 'assets/neapolitan-cards/denara9.png' },
    { imagePath: 'assets/neapolitan-cards/denara10.png' },
    { imagePath: 'assets/neapolitan-cards/spade1.png' },
    { imagePath: 'assets/neapolitan-cards/spade2.png' },
    { imagePath: 'assets/neapolitan-cards/spade3.png' },
    { imagePath: 'assets/neapolitan-cards/spade4.png' },
    { imagePath: 'assets/neapolitan-cards/spade5.png' },
    { imagePath: 'assets/neapolitan-cards/spade6.png' },
    { imagePath: 'assets/neapolitan-cards/spade7.png' },
    { imagePath: 'assets/neapolitan-cards/spade8.png' },
    { imagePath: 'assets/neapolitan-cards/spade9.png' },
    { imagePath: 'assets/neapolitan-cards/spade10.png' },
  ];

  protected getRandomImagePath(): string {
    const randomIndex = Math.floor(Math.random() * this.cards.length);
    return this.cards[randomIndex].imagePath;
  }
}
