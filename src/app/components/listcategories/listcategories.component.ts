import { Component } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css'],
})
export class ListcategoriesComponent {

  titre: string = '';
  categories: Categorie[] = [
    {
      id: 1,
      title: 'Grand électroménager',
      image: 'assets/images/gm.jpg',
      description: 'cat 1',
      available: true,
    },
    {
      id: 2,
      title: 'Petit électroménager',
      image: 'assets/images/pm.jpg',
      description: 'cat 2',
      available: true,
    },
    {
      id: 3,
      title: 'Produits informatiques',
      image: 'assets/images/pc.jpg',
      description: 'cat 3',
      available: true,
    },
    {
      id: 4,
      title: 'Smart Phones',
      image: 'assets/images/phones.jpg',
      description: 'cat 4',
      available: true,
    },
    {
      id: 5,
      title: 'TV, images et son',
      image: 'assets/images/gm.jpg',
      description: 'cat 5',
      available: true,
    },
    {
      id: 6,
      title: 'Produits voiture',
      image: 'assets/images/pv.jpg',
      description: 'cat 6',
      available: false,
    },
  ];

  onImageClick(description: string): void {
    alert(description);
  }
}
