type Price = {
  prev: number;
  next: number;
};

export type Article = {
  src: string;
  title: string;
  price: Price;
  id: string | number;
};

export type BasketItem = {
  article: Article;
  articleCount: number;
};

export type TArticle = {
  id: string;
  src: string;
  description: string;
  name: string;
  category: string;
  price: number;
  size?: string;
  color?: string;
  weight?: string;
  capacity?: string;
  quantity?: string;
  material?: string;
};
