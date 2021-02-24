
import { ChangeDetectorRef, Component } from '@angular/core';
import { Actor } from './Actor';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  slogan = 'Just movie information';
  title = 'Terminator 1';
  actor = new Actor('Arnold', 'Schwarzenegger');
  numbers: Array<number>= [1,2];

  constructor(private cref:ChangeDetectorRef){}
  
  changeActorProperties(): void {
    console.info('changeActorProperties called')
    this.actor.firstName = 'Nicholas';
    this.actor.lastName = 'Cage';
  }
  
  changeActorObject(): void {
    this.actor = new Actor('Bruce', 'Willis');
  }

  add() {
    console.info('add called')
    //this.numbers = this.numbers.slice()
    //this.numbers = [...this.numbers]
    this.numbers.push(Math.random());
    this.cref.detectChanges()
  }
}
