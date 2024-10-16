export type Pizza = {
  id?: number;
  name: string;
  price: number;
};

export type Order = {
  id: number;
  pizza: Pizza[];
  status: 'ordered' | 'completed';
};
