# Checkout System

In this project, a Checkout System is being built as part of an e-commerce website using Node.js and Typescript.

## Project Specification

A checkout system should be built for the e-commerce website of a client, with the following requirements:

- Should be able to scan the listed products
- Should apply the following promotion rules given by the Marketing Team
  - If you spend over £75 then you get a 10% discount
  - If you buy two or more water bottles then the price drops to £22.99 each
- Multiple promotions can be applied to the same checkout
- These rules should be allowed to change over time

## Project Implementation

The Checkout System has been implemented as a command-line application using Node.js and Typescript, using OOP and Typescript's Interfaces for type definitions. The codebase has been tested using the Jest testing framework. Code formatters used are ESLint and Prettier.

### Design

The system is comprised of a Checkout class, an Item interface, an IPromotionRules interface and the actual promotions as a PromotionRules object.

The Checkout Class is responsible for the main checkout operations required in the specification, such as scanning the items and computing the total by applying the promotional rules.

The Item interface defines the Item type using the attributes found in the project specification (item id, name, and price).

The IPromotionRules interface provides a generic rule of the format of the promotional rules. In short, each rule should have a name as its key and its functionality (function) as its value.

Last but not least, the PromotionRules object contains the promotional rules based on the IPromotionRules type.

The relationship between the entities can be seen in the diagram below.

![classDiagram](https://user-images.githubusercontent.com/65397514/146374130-aa1f8602-0f41-4496-b84f-5a65d357fa72.jpg)

### How to use the interface

In order to use the checkout interface, please execute the following steps,

_Clone the repository using_

```bash
$ git clone https://github.com/CodeZeus-dev/CheckoutSystem.git
```

_Install all node package dependencies_

```bash
$ npm install
```

_Run the app_

```bash
$ npm run start:app
```

_Run the test suite_

```bash
$ npm run test:unit
```

The src/app.ts file acts as the checkout system's interface where one can scan items, print them to the console, and compute the total amount while automatically applying any promotional rules.

### Modifications

In order to interact with the interface more effectively, one could change either the input items or even the promotional rules themselves.

> For changing the input items, go to src/app.ts and update the items array with the items of your choice. The items need to comply with the Item interface definition.

> For changing the promotional rules, go to src/promotionRules/promotionRules.ts and add, update or remove any promotional rules to the PromotionRules object by respecting the IPromotionRules interface as the type.

## Future Developments

The current checkout system and its logic could be extended so that it satisfies further requirements or new promotional rules, and could be turned into an API feature for the backend logic of the e-commerce site. It could be used in the business logic of the backend, as a new checkout endpoint, and that way it could be exposed to the client for further use.
