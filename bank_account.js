module.exports = {
  checkingBalance: 10,
  savingsBalance: 20,

  addToChecking: function(deposit) {
    if(typeof deposit != 'number') return;
    if(deposit <= 0) return;

    this.checkingBalance += deposit;
  },

  addToSavings: function(deposit) {
    if(deposit <= 0) return;
    this.savingsBalance += deposit;
  },

  withdrawFromChecking: function(amount) {
    if(this.checkingBalance - amount < 0) return;
    this.checkingBalance -= amount;
  }
};
