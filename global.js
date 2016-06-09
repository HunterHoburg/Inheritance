function globalTest() {
  this.evilVar = 'Im evil';

  return this.evilVar;
}

module.exports = globalTest;
