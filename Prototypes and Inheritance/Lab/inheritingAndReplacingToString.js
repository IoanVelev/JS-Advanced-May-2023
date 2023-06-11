function personAndTeacher() {
  class Person {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
    toString(){
        return  `Person (name: ${this.name}, email: ${this.email})`
      }
  }
  class Teacher extends Person {
    constructor(name, email, subject) {
      super(name, email);
      this.subject = subject;
    }
    toString(){
        return  `Teacher (name: ${this.name}, email: ${this.email}, subject: ${this.subject})`
      }
  }
  class Student extends Person {
    constructor(name, email, course) {
        super(name, email);
        this.course = course;
      }
      toString(){
        return  `Student (name: ${this.name}, email: ${this.email}, course: ${this.course})`
      }
  }
  return {
    Person,
    Teacher,
    Student,
  };
}
let classes = personAndTeacher();
let Teacher = classes.Teacher;
let Person = classes.Person;
let Student = classes.Student;

let t = new Teacher("pesho", "pesho@gmail.com", "Mathematics");
let s = new Student("gosho", "gosho@gmail.com", "Mathematics");
let p = new Person("Ivan", "Petkov", "ivpetkov@gmail.com")
console.log(t.toString());
console.log(s.toString());
console.log(p.toString());
