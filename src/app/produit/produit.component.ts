import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

// Enregistrez les données locales pour la langue française
registerLocaleData(localeFr, 'fr');

@Component({
  selector: 'app-produit',
  standalone: true,
  imports: [CommonModule, DetailProduitComponent],
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  produits = [
    { id: 1, titre: 'Alloe vera', prix: 10.5, image: 'assets/images/image1.png' },
    { id: 2, titre: 'Huile', prix: 20.99, image: 'assets/images/image2.png' },
    { id: 3, titre: 'Parfum vera', prix: 15.0, image: 'assets/images/image1.png' },
    { id: 4, titre: 'Lemon', prix: 12.5, image: 'assets/images/image7.jpg' },
    { id: 5, titre: 'Kook', prix: 22.0, image: 'assets/images/image2.png' },
    { id: 6, titre: 'Lait corp', prix: 18.75, image: 'assets/images/image1.png' }
  ];

  selectedProduit: any = null;

  @Output() produitSelectionne = new EventEmitter<any>();

  afficherDetail(produit: any) {
    this.selectedProduit = produit;
    this.produitSelectionne.emit(produit);
    console.log('Détail du produit:', produit);
  }
}
