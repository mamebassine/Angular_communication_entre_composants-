// import { Component } from '@angular/core';
// import { RouterOutlet } from '@angular/router';
// import {ProduitComponent} from './produit/produit.component'

// @Component({
//   selector: 'app-root',
//   standalone: true,
//   imports: [RouterOutlet, ProduitComponent],
//   templateUrl: './app.component.html',
//   styleUrl: './app.component.css'
// })
// export class AppComponent {
//   title = 'gestion-produits';
// }


import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProduitComponent } from './produit/produit.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ProduitComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-produits';
}
