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
