// import { Component, EventEmitter, Output } from '@angular/core';
// import { CommonModule, registerLocaleData } from '@angular/common';
// import localeFr from '@angular/common/locales/fr';
// import { DetailProduitComponent } from '../detail-produit/detail-produit.component';

// // Enregistrez les données locales pour la langue française
// registerLocaleData(localeFr, 'fr');

// @Component({
//   selector: 'app-produit',
//   standalone: true,
//   imports: [CommonModule, DetailProduitComponent],
//   templateUrl: './produit.component.html',
//   styleUrls: ['./produit.component.css']
// })
// export class ProduitComponent {
//   produits = [
//     { id: 1, titre: 'Alloe vera', prix: 10.5, image: 'assets/images/image1.png', date: new Date('2023-01-01'), description: 'Un produit naturel' },
//     { id: 2, titre: 'Huile', prix: 20.99, image: 'assets/images/image2.png', date: new Date('2023-02-15'), description: 'Huile essentielle de qualité' },
//     { id: 3, titre: 'Parfum vera', prix: 15.0, image: 'assets/images/image1.png', date: new Date('2023-03-10'), description: 'Parfum naturel' },
//     { id: 4, titre: 'Lemon', prix: 12.5, image: 'assets/images/image7.jpg', date: new Date('2023-04-20'), description: 'Saveur citronnée' },
//     { id: 5, titre: 'Kook', prix: 22.0, image: 'assets/images/image2.png', date: new Date('2023-05-05'), description: 'Un produit exotique' },
//     { id: 6, titre: 'Lait corp', prix: 18.75, image: 'assets/images/image1.png', date: new Date('2023-06-25'), description: 'Lait pour le corps' }
//   ];

//   selectedProduit: any = null;

//   @Output() produitSelectionne = new EventEmitter<any>();

//   afficherDetail(produit: any) {
//     this.selectedProduit = produit;
//     this.produitSelectionne.emit(produit);
//     console.log('Détail du produit:', produit);
//   }
// }




// import { Component, EventEmitter, Output } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { DetailProduitComponent } from '../detail-produit/detail-produit.component';

// import { registerLocaleData } from '@angular/common';
// import localeFr from '@angular/common/locales/fr';

// // Enregistrez les données locales pour la langue française
// registerLocaleData(localeFr, 'fr');

// @Component({
//   selector: 'app-produit',
//   standalone: true,
//   imports: [CommonModule, DetailProduitComponent],
//   templateUrl: './produit.component.html',
//   styleUrls: ['./produit.component.css']
// })
// export class ProduitComponent {
//   produits = [
//     { id: 1, titre: 'Alloe vera', prix: 10.5, image: 'assets/images/image1.png' },
//     { id: 2, titre: 'Huile', prix: 20.99, image: 'assets/images/image2.png' },
//     { id: 3, titre: 'Parfum vera', prix: 15.0, image: 'assets/images/image1.png' },
//     { id: 4, titre: 'Lemon', prix: 12.5, image: 'assets/images/image7.jpg' },
//     { id: 5, titre: 'Kook', prix: 22.0, image: 'assets/images/image2.png' },
//     { id: 6, titre: 'Lait corp', prix: 18.75, image: 'assets/images/image1.png' }
//   ];

//   selectedProduit: any = null;

//   @Output() produitSelectionne = new EventEmitter<any>();

//   afficherDetail(produit: any) {
//     this.selectedProduit = produit;
//     this.produitSelectionne.emit(produit);
//     console.log('Détail du produit:', produit);
//   }
// }



import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { DetailProduitComponent } from '../detail-produit/detail-produit.component';

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
    { id: 1, titre: 'Alloe vera', prix: 10.5, image: 'assets/images/image1.png', date: new Date('2023-01-01'), description: 'Un produit naturel' },
    { id: 2, titre: 'Huile', prix: 20.99, image: 'assets/images/image2.png', date: new Date('2023-02-15'), description: 'Huile essentielle de qualité' },
    { id: 3, titre: 'Parfum vera', prix: 15.0, image: 'assets/images/image1.png', date: new Date('2023-03-10'), description: 'Parfum naturel' },
    { id: 4, titre: 'Lemon', prix: 12.5, image: 'assets/images/image7.jpg', date: new Date('2023-04-20'), description: 'Saveur citronnée' },
    { id: 5, titre: 'Kook', prix: 22.0, image: 'assets/images/image2.png', date: new Date('2023-05-05'), description: 'Un produit exotique' },
    { id: 6, titre: 'Lait corp', prix: 18.75, image: 'assets/images/image1.png', date: new Date('2023-06-25'), description: 'Lait pour le corps' }
  ];

  selectedProduit: any = null;

  @Output() produitSelectionne = new EventEmitter<any>();

  afficherDetail(produit: any) {
    this.selectedProduit = produit;
    this.produitSelectionne.emit(produit);
    console.log('Détail du produit:', produit);
  }
}
