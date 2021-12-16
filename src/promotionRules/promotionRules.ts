import { IPromotionRules } from "./promotionRules.interface";
import { BaseItem as Item } from "../items/item.interface";

export const PromotionRules: IPromotionRules = {
  waterBottleRule: (items: Array<Item>): Array<Item> => {
    if (
      items.filter((item: Item) => item.name === "Water Bottle").length >= 2
    ) {
      items = items.map((item: Item) => {
        let temp: Item = Object.assign({}, item);
        temp.price = temp.name === "Water Bottle" ? 22.99 : temp.price;
        return temp;
      });
    }
    return items;
  },
  totalOverPriceRule: (totalAmount: number): number => {
    if (totalAmount > 75.0) {
      totalAmount = 0.9 * totalAmount;
    }
    return totalAmount;
  },
};
