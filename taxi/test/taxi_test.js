var expect = require('chai').expect;
var Car   = require('../taxi');
var Van   = require('../taxi_van');

describe('taxi driving', function() {
  describe('car', function() {
    it('is in drivable condition', function() {
      var options = {
        capacity: 10,
        perMileCost: 2
      };
      var car = new Car(options);

      expect(car.available).to.equal(true);
      expect(car.capacity).to.equal(options.capacity);
      expect(car.perMileCost).to.equal(options.perMileCost);
    });

    it('picks up passengers less than or equal to capacity', function() {
      var options = {
        capacity: 4,
      };
      var car = new Car(options);
      var passengerCount = 4;

      expect(car.pickUpPassengers(passengerCount)).to.equal(true);
      expect(car.passengerCount).to.equal(passengerCount);
      expect(car.available).to.equal(false);
    });

    it('drives passengers a given distance', function() {
      var distance = 20;
      var car = new Car();
      car.setDistance(distance)

      expect(car.distance).to.equal(20);
    });

    it('drops passengers off', function() {
      var options = {
        perMileCost: 2
      }
      var car = new Car(options);
      var money = car.work(3, 20);
      expect(money).to.equal(40);

      expect(car.passengerCount).to.equal(0);
      expect(car.available).to.equal(true);
      expect(car.distance).to.equal(0);
    });
  });

  describe('van', function() {
    it('should have a higher capacity', function() {
      var van = new Van({
        capacity: 10,
        perMileCost: 5
      });

      expect(van.capacity).to.equal(10);
      expect(van.perMileCost).to.equal(5);

      var money = van.work(3, 20);
      expect(money).to.equal(105);
    });
  });
});
