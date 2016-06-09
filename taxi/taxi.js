function Car(options) {
  options = options || {};
  this.available = options.available || true;
  this.capacity = options.capacity || 4;
  this.perMileCost = options.perMileCost || 1;
};

Car.prototype.pickUpPassengers = function(passengerCount) {
  if(!this.available) return false;

  this.passengerCount = passengerCount;
  this.available = false;
  return true;
};

Car.prototype.setDistance = function(distance) {
  this.distance = distance;
};

Car.prototype.calculateFare = function() {
  return this.distance * this.perMileCost;
};

Car.prototype.dropOffPassengers = function() {
  this.passengerCount = 0;
  this.distance = 0;
  this.available = true;
};

Car.prototype.work = function(passengerCount, distance) {
  this.pickUpPassengers(passengerCount);
  this.setDistance(distance);
  var showMeTheMoney = this.calculateFare();
  this.dropOffPassengers();
  return showMeTheMoney;
}

module.exports = Car;
