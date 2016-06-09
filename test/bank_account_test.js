var expect = require('chai').expect;
var bankAccount = require('../bank_account');

describe('bankAccount', function() {

  it('should use addToChecking to add to checkingBalance', function() {
    var initialBalance = bankAccount.checkingBalance,
        deposit        = 20;
    bankAccount.addToChecking(deposit);

    expect(bankAccount.checkingBalance).to.equal(initialBalance + deposit);
  });

  it('should use addToSavings to add to savingsBalance', function() {
    var initialBalance = bankAccount.savingsBalance,
        deposit        = 20;
    bankAccount.addToSavings(deposit);

    expect(bankAccount.savingsBalance).to.equal(initialBalance + deposit);
  });

  it('should not deposit negative amounts', function() {
    var initialBalance = bankAccount.checkingBalance,
        deposit        = -10;
    bankAccount.addToChecking(deposit);

    expect(bankAccount.checkingBalance).to.equal(initialBalance);
  });

  it('should allow withdrawal from checkingBalance', function() {
    var initialBalance = bankAccount.checkingBalance,
        withdrawal     = 10;
    bankAccount.withdrawFromChecking(withdrawal);

    expect(bankAccount.checkingBalance).to.equal(initialBalance - withdrawal);
  });

  it('should never be less than 0', function() {
    var initialBalance = bankAccount.checkingBalance,
        withdrawal     = initialBalance + 10;

    bankAccount.withdrawFromChecking(withdrawal);

    expect(bankAccount.checkingBalance).to.equal(initialBalance);
  });

  it('should only accept deposits as numbers', function() {
    var initialBalance = bankAccount.checkingBalance;
    bankAccount.addToChecking('dog');

    expect(bankAccount.checkingBalance).to.equal(initialBalance);
  });

});
