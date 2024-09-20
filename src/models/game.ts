// Vallidierung

export class Game {
  public players: string[] = [];
  public stack: string[] = [];
  public playerCards: string[] = [];
  public currentPlayer: number = 0;

  constructor() {
    //Alle Kartenbilder abrufen
    for (let i = 0; i < 14; i++) {
      this.stack.push('ace_' + i);
      this.stack.push('clubs_' + i);
      this.stack.push('diamonds_' + i);
      this.stack.push('hearts_' + i);
    }
    shuffle(this.stack);
  }
}

//Karten Mischen
function shuffle(array: any[]) {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;
  while (0 != currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }
  return array;
}
