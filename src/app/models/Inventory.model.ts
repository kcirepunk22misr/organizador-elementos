export class InventoryModel {
  constructor(
    public _id: string,
    public name: string,
    public group: string,
    public type: string,
    public marca: string,
    public color: string,
    public size: string,
    public state: string,
    public showcase: string,
    public row: string,
    public column: string,
    public quantify: number,
    public img: string
  ) {}
}
