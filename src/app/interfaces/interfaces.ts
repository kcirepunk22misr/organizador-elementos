export interface Properties {
  _id: string;
  name: string;
}

export interface RespInventory {
  ok: boolean;
  inventario: Inventory;
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
