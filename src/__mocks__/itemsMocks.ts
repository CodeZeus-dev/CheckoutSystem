import { BaseItem as Item } from "../items/item.interface";

export const regularItems: Array<Item> = [
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

export const allDiscountsItems: Array<Item> = [
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

export const waterDiscountItems: Array<Item> = [
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

export const totalAmountDiscountItems: Array<Item> = [
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
