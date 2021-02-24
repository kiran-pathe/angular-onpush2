import { ChangeDetectionStrategy, Component, Input,  OnInit, SimpleChanges } from '@angular/core';
import { Actor } from '../Actor';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MovieComponent implements OnInit {
@Input() title: string;
  @Input() actor: Actor;
  @Input() list;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes:SimpleChanges){
    console.log(changes)
  }

  time() {
    return new Date();
  }

}