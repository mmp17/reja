//calling package
const moment = require("moment");
const timeFormat = moment().format("HH:mm");

class Shop {
  // state
  bread;
  ramyon;
  coke;

  // constructor
  constructor(bread, ramyon, coke) {
    this.bread = bread;
    this.ramyon = ramyon;
    this.coke = coke;
  }

  //methods
  remainder(bread, ramyon, coke) {
    console.log(
      `Currently at ${timeFormat}, You have got ${this.bread} ${
        this.bread == 1 ? "bread" : "breads"
      }, ${this.ramyon} ${this.ramyon == 1 ? "ramyon" : "ramyons"} and ${
        this.coke
      } ${this.coke == 1 ? "coke" : "cokes"} in the shop.`
    );
    return "";
  }

  sales(item, quantity) {
    if (item == "bread") {
      console.log(
        `${
          quantity == 1 ? "Sale is" : "Sales are"
        } made at ${timeFormat}! ${quantity} ${
          quantity == 1 ? "unit" : "units"
        } of ${item} ${quantity == 1 ? "is" : "are"} sold.`
      );
      this.bread = this.bread - quantity;
      //   return (this.bread = this.bread - quantity);
      //   console.log(`Remaining bread is ${this.bread}`);
    } else if (item == "ramyon") {
      console.log(
        `${
          quantity == 1 ? "Sale is" : "Sales are"
        } made at ${timeFormat}! ${quantity} ${
          quantity == 1 ? "unit" : "units"
        } of ${item} ${quantity == 1 ? "is" : "are"} sold.`
      );
      this.ramyon = this.ramyon - quantity;
    } else if (item == "coke") {
      console.log(
        `${
          quantity == 1 ? "Sale is" : "Sales are"
        } made at ${timeFormat}! ${quantity} ${
          quantity == 1 ? "unit" : "units"
        } of ${item} ${quantity == 1 ? "is" : "are"} sold.`
      );
      this.coke = this.coke - quantity;
    } else {
      console.log(`Enter the correct data`);
    }
    return "";
  }

  procurement(item, quantity) {
    if (item == "bread") {
      console.log(
        `${
          quantity == 1 ? "Procurement is" : "Procurements are"
        } occurred at ${timeFormat}! ${quantity} ${
          quantity == 1 ? "unit" : "units"
        } of ${item} ${quantity == 1 ? "is" : "are"} bought.`
      );
      this.bread = this.bread + quantity;
    } else if (item == "ramyon") {
      console.log(
        `${
          quantity == 1 ? "Procurement is" : "Procurements are"
        } occurred at ${timeFormat}! ${quantity} ${
          quantity == 1 ? "unit" : "units"
        } of ${item} ${quantity == 1 ? "is" : "are"} bought.`
      );
      this.ramyon = this.ramyon + quantity;
    } else if (item == "coke") {
      console.log(
        `${
          quantity == 1 ? "Procurement is" : "Procurements are"
        } occurred at ${timeFormat}! ${quantity} ${
          quantity == 1 ? "unit" : "units"
        } of ${item} ${quantity == 1 ? "is" : "are"} bought.`
      );
      this.coke = this.coke + quantity;
    } else {
      console.log(`Enter the correct data`);
    }
  }
}

module.exports = Shop;
