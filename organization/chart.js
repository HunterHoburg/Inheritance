function Employee(options) {
  this.name = options.name;
  this.workload = options.workload || [];
}

Employee.prototype.topToBottomList = function() {
  var count = 0;
  if(this.workload.length === 0) return 0;
  for (var emp of this.workload) {
    count += 1;
    count += emp.topToBottomList();
  };
  return count;
};

module.exports = Employee;
