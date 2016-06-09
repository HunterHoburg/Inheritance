var Employee = require('./chart');

function Manager(options) {
  Employee.call(this, options)
}

Manager.prototype = Object.create(Employee.prototype);
Manager.prototype.constructor = Manager;

Manager.prototype.reportees = function() {
  return this.workload;
};



module.exports = Manager;
