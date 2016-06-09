var expect = require('chai').expect;
var Employee = require('../chart');
var Manager = require('../manager');

describe('employee', function() {
  it('should have a name and no workload', function() {
    var options = {
      name: 'Employee',
    };
    var peon = new Employee(options);
    expect(peon.name).to.equal('Employee');
    expect(peon.workload).to.deep.equal([]);
  });
});

describe('manager', function() {
  it('should have a name and workload', function() {
    var peon = new Employee({name: 'peon'});
    var options = {
      name: 'Manager',
      workload: [peon]
    };

    var manager = new Manager(options);
    expect(manager.name).to.equal('Manager');
    expect(manager.workload).to.deep.equal([peon]);
  });

  it('list all the reporting employees', function() {
    var peon = new Employee({name: 'peon'});
    var poon = new Employee({name: 'poon'});
    var michael = new Employee({name: 'michael'});
    var george = new Employee({name: 'george'});
    var options = {
      name: 'Manager',
      workload: [peon, george, michael, poon]
    };

    var manager = new Manager(options);
    expect(manager.name).to.equal('Manager');
    expect(manager.reportees()).to.deep.equal([peon, george, michael, poon]);
  });

  it('list all the reporting employees top to bottom', function() {
    var peon = new Employee({name: 'peon'});
    var poon = new Employee({name: 'poon'});
    var michael = new Manager({name: 'michael', workload: [peon, poon]});
    var options = {
      name: 'Manager',
      workload: [michael]
    };

    var george = new Manager(options);
    expect(george.name).to.equal('Manager');
    expect(george.topToBottomList() + 1).to.deep.equal(4);
  });
});
