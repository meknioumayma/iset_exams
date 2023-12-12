import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  deconnexion() {
    // Ajoutez ici la logique de déconnexion
    console.log('Déconnexion effectuée.');
  }
}