import { Checkout } from "./Checkout";
import { BaseItem as Item } from "../items/item.interface";
import { IPromotionRules } from "../promotionRules/promotionRules.interface";
import { PromotionRules } from "../promotionRules/promotionRules";

describe("Unit Testing the Checkout class", () => {
  let promotionalRules: IPromotionRules = PromotionRules;
  let checkout: Checkout;
  let items: Array<Item>;

  beforeEach(() => {
    checkout = new Checkout(promotionalRules);
    items = [
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
  });

  test("should receive the promotional rules as an IPromotionRules object", () => {
    const rules: IPromotionRules = checkout.getPromotionalRules();
    expect(rules).toEqual(PromotionRules);
  });

  test("should scan items to be checked out", () => {
    checkout.scan(items);
    expect(checkout.scan).toHaveBeenCalled;
    expect(checkout.getItems()).toEqual(items);
  });

  describe("Unit Testing the total() method", () => {
    test("should compute the total amount with any promotional rule", () => {
      checkout.scan(items);
      const expectedTotal: number = 84.55;
      const receivedTotal: number = checkout.total();
      expect(receivedTotal).toEqual(expectedTotal);
    });

    test("should compute the total amount - over 75 gets 10% discount and water bottle rules", () => {
      const itemsWithProm: Array<Item> = [
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
      checkout.scan(itemsWithProm);
      const expectedTotal: number = 103.47;
      const receivedTotal: number = checkout.total();
      expect(receivedTotal).toEqual(expectedTotal);
    });

    test("should compute the total amount - water bottle rule", () => {
      const itemsWithProm: Array<Item> = [
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
          id: "001",
          name: "Water Bottle",
          price: 24.95,
        },
      ];
      checkout.scan(itemsWithProm);
      const expectedTotal: number = 68.97;
      const receivedTotal: number = checkout.total();
      expect(receivedTotal).toEqual(expectedTotal);
    });

    test("should compute the total amount - over 75 gets 10% discount rule", () => {
      const itemsWithProm: Array<Item> = [
        {
          id: "002",
          name: "Hoodie",
          price: 65.0,
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
      checkout.scan(itemsWithProm);
      const expectedTotal: number = 120.59;
      const receivedTotal: number = checkout.total();
      expect(receivedTotal).toEqual(expectedTotal);
    });

    test("should throw an error when attempting to compute the total without any items", () => {
      expect(checkout.total).toThrowError();
    });
  });
});
