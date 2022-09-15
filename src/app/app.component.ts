import { Component, OnInit } from '@angular/core';
import { PersonajesService } from './personajes/personajes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'dragon_ball';
  Personajes: any;
  constructor(public personajes: PersonajesService) { }

  ngOnInit() {
    this.personajes.getPersonajes().subscribe
      (
        (r) => { this.Personajes = r; console.log(r) },
        (e) => { console.error(e) }
      )
  }
}


