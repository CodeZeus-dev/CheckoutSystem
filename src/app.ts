import { BaseItem as Item } from "./items/item.interface";
import { Checkout } from "./checkout/Checkout";
import { IPromotionRules } from "./promotionRules/promotionRules.interface";
import { PromotionRules } from "./promotionRules/promotionRules";
import { printItemsTable } from "./helpers/printItemsTable";
import { printTotalAmount } from "./helpers/printTotalAmount";

let items: Array<Item> = [
  {
    id: "001",
    name: "Water Bottle",
    price: 24.95,
  },
  {
    id: "001",
    name: "Water Bottle",
    price: 24.95,
  },
  {
    id: "002",
    name: "Hoodie",
    price: 65.0,
  },
  {
    id: "003",
    name: "Sticker Set",
    price: 3.99,
  },
];

const promotionalRules: IPromotionRules = PromotionRules;

const checkout: Checkout = new Checkout(promotionalRules);

checkout.scan(items);

printItemsTable(items);

printTotalAmount(checkout.total());
