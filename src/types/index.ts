export type Product = {
  id?: number,
  name: string,
  amount: string,
  orderId?: number,
};

export type Order = {
  id: number;
  userId: number;
  productsIds: number[];
};

export type Users = {
  id?: number,
  username: string,
  vocation: string,
  level: number,
  password?: string,
};
