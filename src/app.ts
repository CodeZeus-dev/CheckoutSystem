import { BaseItem as Item } from "./items/item.interface";
import { Checkout } from "./checkout/Checkout";
import {
  IPromotionRules,
  PromotionRules,
} from "./promotionRules/promotionRules.interface";

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

console.log(checkout.total());
