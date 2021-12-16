import { PromotionRules } from "./promotionRules";
import { waterDiscountItems, regularItems } from "../__mocks__/itemsMocks";
import { BaseItem as Item } from "../items/item.interface";

describe("Unit Testing PromotionRules Object", () => {
  describe("Unit Testing the totalOverPriceRule", () => {
    test("should remove 10% off the total amount if over 75", () => {
      let overallValue: number = 100.0;
      let expectedValue: number = 90.0;
      let receivedValue: number = PromotionRules.totalOverPriceRule(
        overallValue
      );
      expect(receivedValue).toEqual(expectedValue);
    });

    test("should leave the total amount unaffected if less than or equal to 75", () => {
      const overallValue: number = 50.0;
      const expectedValue: number = 50.0;
      const receivedValue: number = PromotionRules.totalOverPriceRule(
        overallValue
      );
      expect(receivedValue).toEqual(expectedValue);
    });
  });

  describe("Unit Testing the waterBottleRule", () => {
    test("should alter each water bottle's value to 22.99 if two bottles or more at checkout", () => {
      let preDiscountBottleValue: number = 24.95;
      let postDiscountBottleValue: number = 22.99;

      let preDiscountTotalValue: number = 74.85;
      let postDiscountTotalValue: number = 68.97;

      let totalAmount: number = 0;

      expect(waterDiscountItems[0].price).toEqual(preDiscountBottleValue);

      waterDiscountItems.forEach((item: Item) => {
        totalAmount += item.price;
      });

      expect(totalAmount).toEqual(preDiscountTotalValue);

      totalAmount = 0;

      let items = PromotionRules.waterBottleRule(waterDiscountItems);
      items.forEach((item: Item) => {
        totalAmount += item.price;
      });

      expect(totalAmount).toEqual(postDiscountTotalValue);
      expect(items[0].price).toEqual(postDiscountBottleValue);
    });

    test("should not alter each water bottle's value to 22.99 if less than 2 bottles at checkout", () => {
      let preDiscountBottleValue: number = 24.95;

      let preDiscountTotalValue: number = 93.94;
      let postDiscountTotalValue: number = 93.94;

      let totalAmount: number = 0;

      expect(regularItems[0].price).toEqual(preDiscountBottleValue);

      regularItems.forEach((item: Item) => {
        totalAmount += item.price;
      });

      expect(totalAmount).toEqual(preDiscountTotalValue);

      totalAmount = 0;

      let postDiscountItems = PromotionRules.waterBottleRule(regularItems);

      postDiscountItems.forEach((item: Item) => {
        totalAmount += item.price;
      });

      expect(totalAmount).toEqual(postDiscountTotalValue);
      expect(postDiscountItems[0].price).toEqual(preDiscountBottleValue);
    });
  });
});
