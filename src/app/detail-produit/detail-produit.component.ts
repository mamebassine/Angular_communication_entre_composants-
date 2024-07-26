// // src/app/detail-produit/detail-produit.component.ts

// import { Component, Input } from '@angular/core';

// @Component({
//   selector: 'app-detail-produit',
//   templateUrl: './detail-produit.component.html',
//   styleUrls: ['./detail-produit.component.css']
// })
// export class DetailProduitComponent {
//   @Input() produit: any;
// 1}


import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detail-produit',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent {
  @Input() produit: any;
}
