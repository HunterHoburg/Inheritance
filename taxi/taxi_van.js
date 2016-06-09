var Car = require('./taxi');

function Van(options) {
  Car.call(this, options);
}

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;

Van.prototype.calculateFare = function() {
  return (this.distance * this.perMileCost + 5) ;
};

module.exports = Van;
