import { Component } from '@angular/core';
import { LoremIpsum } from 'lorem-ipsum';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4,
    },
    wordsPerSentence: {
      max: 16,
      min: 4,
    },
  });
  randomText = this.lorem.generateSentences(1);

  enteredText = '';

  getInputValue(target: any) {
    const value = target.value;
    this.enteredText = value;
    console.log(value);
  }
  compare(letter: string, enteredLetter: string) {
    if (!enteredLetter) return 'pending';
    return enteredLetter===letter ? "correct" : "incorrect"
  }
}
