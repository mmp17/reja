class Account {
  //state
  #amount;
  #account_id;

  // constructor
  constructor(name, amount, account_id) {
    this.name = name;
    this.#amount = amount;
    this.#account_id = account_id;
  }

  // methods
  tellMeBalance(amount) {
    console.log(`Your account balance: ${amount}`);
    return this.#amount;
  }

  whithdrawMoney(amount) {
    if (this.#amount > amount) {
      this.#amount -= amount;
      console.log(
        `${amount} withdrawn from your ${
          this.#account_id
        } account and the balance is ${this.#amount}`
      );
    } else {
      console.log(`Your account balance is unsufficient: ${this.#amount}`);
    }
  }

  makeDeposit(amount) {
    this.#amount += amount;
    console.log(
      `Your account balance is deposited with ${amount} and the balance is ${
        this.#amount
      }`
    );
  }

  giveMeDetails() {
    console.log(
      `Hello dear customer ${this.name}. Your account balance is ${
        this.#amount
      }`
    );
  }

  static tellMeAboutClass() {
    console.log("This account servs you with making account numbers");
  }
}

module.exports = Account;
