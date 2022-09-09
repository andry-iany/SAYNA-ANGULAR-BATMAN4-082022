import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BasketItem } from 'src/app/types';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss'],
})
export class BasketComponent implements OnInit {
  basketItems: BasketItem[] = [
    {
      article: {
        id: 1,
        price: { next: 49.0, prev: 49 },
        src: '../../../assets/illustrations/game/Batgame_14.png',
        title: 'Figurine du Joker',
      },
      articleCount: 1,
    },
    {
      article: {
        id: 2,
        price: { next: 49.0, prev: 49 },
        src: '../../../assets/illustrations/game/Batgame_14.png',
        title: 'Figurine du Joker',
      },
      articleCount: 1,
    },
  ];

  onItemCountChange(id: BasketItem['article']['id'], newCount: number) {
    this.basketItems = this.basketItems.map((item) => {
      return String(id) === String(item.article.id)
        ? { ...item, articleCount: newCount }
        : item;
    });
  }

  onItemDelete(id: BasketItem['article']['id']) {
    this.basketItems = this.basketItems.filter(
      (item) => String(id) !== String(item.article.id)
    );
  }

  ngOnInit(): void {}

  get subTotal() {
    return this.basketItems.reduce(
      (acc, item) => acc + item.article.price.next,
      0
    );
  }
}
