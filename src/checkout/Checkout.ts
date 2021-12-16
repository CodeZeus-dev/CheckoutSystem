import { BaseItem as Item } from "../items/item.interface";
import { IPromotionRules } from "../promotionRules/promotionRules.interface";

export class Checkout {
  promotionalRules: IPromotionRules;
  items: Array<Item>;

  constructor(promotionalRules: IPromotionRules) {
    this.promotionalRules = { ...promotionalRules };
    this.items = [];
  }

  getPromotionalRules(): IPromotionRules {
    return this.promotionalRules;
  }

  getItems(): Array<Item> {
    return this.items;
  }

  scan(items: Array<Item>) {
    this.items = [...items];
  }

  total(): number {
    if (this.items.length === 0 || !this.items) {
      throw new Error("No items to be checked out, please scan your items");
    }
    let totalAmount: number = 0.0;
    this.items = this.#addPreCheckoutPromotions(this.items);
    this.items.forEach((item: Item) => {
      totalAmount += item.price;
    });
    totalAmount = this.#addPostCheckoutPromotions(totalAmount);
    return Math.round(totalAmount * 100) / 100;
  }

  #addPreCheckoutPromotions(items: Array<Item>) {
    return this.promotionalRules.waterBottleRule(items);
  }

  #addPostCheckoutPromotions(total: number) {
    total = this.promotionalRules.totalOverPriceRule(total);
    return total;
  }
}
