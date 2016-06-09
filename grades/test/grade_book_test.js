var expect = require('chai').expect;
var GradeBook = require('../grade_book').GradeBook;
var Student = require('../grade_book').Student;

describe('gradeBook', function() {
  it('should allow a student to be added', function() {
    var gradeBook = new GradeBook();
    var newStudent = new Student('George');
    gradeBook.addStudent(newStudent);

    expect(gradeBook.students[0].name).to.equal('George');
  });

  it('should allow grades to be assigned to students', function() {
    var gradeBook = new GradeBook();
    var newStudent = new Student('George');
    newStudent.addGrade('A');
    gradeBook.addStudent(newStudent);

    expect(gradeBook.students[0].grades[0]).to.equal('A');
  })
});
