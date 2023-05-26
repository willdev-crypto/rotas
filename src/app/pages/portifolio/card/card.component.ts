import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  constructor(private activeRoute: ActivatedRoute, private navegador:Router){
    this.activeRoute.params.subscribe(
      res => console.log(res)
    )
  }

}
