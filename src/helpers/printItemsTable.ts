import { BaseItem as Item } from "../items/item.interface";

export const printItemsTable = (items: Array<Item>) => {
  console.log("Checking out the following items: ");
  console.table(items);
};
