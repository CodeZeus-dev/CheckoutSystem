import express, { Request, Response } from "express";
import * as ItemService from "../items/items.service";
import { BaseItem as Item } from "../items/item.interface";
import { IPromotionRules } from "../promotionRules/promotionRules.interface";

export const checkoutRouter = express.Router();

// GET checkout items and promotional rules
checkoutRouter.get("/", async (req: Request, res: Response) => {
  try {
    const items: Array<Item> = await ItemService.findAll();
    const promotionalRules: IPromotionRules = await ItemService.findPromRules();

    res.status(200).send({ items, promotionalRules });
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).send(e.message);
    }
  }
});

// POST checkout
checkoutRouter.post("/", async (req: Request, res: Response) => {
  try {
    const items: Array<Item> = req.body.items;

    await ItemService.createCheckout();

    await ItemService.scanAll(items);

    const total: number = await ItemService.total();

    res.status(200).send({ "Total Value": total });
  } catch (e: unknown) {
    if (e instanceof Error) {
      res.status(500).send(e.message);
    }
  }
});
