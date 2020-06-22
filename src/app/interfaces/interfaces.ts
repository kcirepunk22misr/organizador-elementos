export interface Properties {
  _id: string;
  name: string;
}

export interface RespInventory {
  ok: boolean;
  inventario: Inventory;
}

export interface Lender {
  _id: string;
  name: string;
  surname: string;
  email: string;
  organization: string;
  number: number;
}

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  sex: string;
  role: string;
  createdAt: Date;
  updateAt: Date;
  active: boolean;
}

export interface Inventory {
  _id: string;
  name: string;
  group: string;
  type: string;
  marca: string;
  color: string;
  size: string;
  state: string;
  showcase: string;
  row: string;
  column: string;
  quantify: number;
  img?: string;
}
