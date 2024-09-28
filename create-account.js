function createAccount(pin, amount) {
    let balance = amount;

    return {
      // Method to check the balance, only if the correct PIN is provided
      checkBalance: function(userPin) {
        if (userPin === pin) {
          return `Your balance is $${balance}.`;
        } else return 'Invalid PIN.';
      },
      // Method to deposit money into the account, only if the correct PIN is provided
      Deposit: function(userPin,amount) {
        if (userPin === pin) {
          balance += amount;
          return `Deposit successful! New balance is $${balance}.`;
        } else return 'Invalid PIN.';
      },
      // Method to withdraw money from the account, only if the correct PIN is provided and the withdrawal amount does not exceed the balance

      withdraw: function(userPin, amount) {
        if (userPin === pin && amount <= balance) {
          balance -= amount;
          return `Withdrawal successful! New balance is $${balance}.`;
        } else if (amount > balance) return 'Insufficient funds.';
        else return 'Invalid PIN.';
      },

      // method to change the old pin 
      changePin: function (oldPin, newPin) {
        if (oldPin===pin){
            pin=newPin;
            return `Your Password PIN has been changed your new password is ${newPin}`;
        } else {
            return 'Invalid Old PIN.';
        }

}

};
}
// Test the account
let account = createAccount(1234, 0);
console.log(account.checkBalance(1234));
console.log(account.Deposit(1234,1000)); // Output: "Your balance is $300."
console.log(account.withdraw(1234,300)); // will withdraw 300
console.log(account.withdraw(1234,100)); // will withdraw 100

console.log(account.changePin(1234,2000)); // will change the password to 2000
console.log(account.checkBalance(2000)); // will checck the acc with new password that added recently

module.exports = { createAccount };


