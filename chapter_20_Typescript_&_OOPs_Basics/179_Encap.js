class BankAccount {
    #balance = 0;  // starts at 0, private field - hidden from outside

    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;  //this.#balance = this/this.#balance+ amount; 0 + 100 = 100
            
        }
    }

    getBalance() {
        return this.#balance; // controlled access
    }
    
}

const account = new BankAccount();
// account = new BankAccount();
account.deposit(100);
console.log(account.getBalance());


// console.log(account.balance);  // undefined  (no public field by that name)