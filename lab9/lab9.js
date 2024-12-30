let square = {                        //---------------------------1
  color: "yellow",
  side: 10                                   
}        
let lilSquare = {
  __proto__: square,
  side: 5
}   
let circle = {                       
  radius: 10                                   
}        
let lilCircle = {
  __proto__: circle,
  color: "green" 
}
let triangle = {                       
  size: 15,
  lines: 1                                   
}        
let liltriangle = {
  __proto__: triangle,
  lines: 3 
}
let diff = []; 
for (let item in liltriangle) {
    diff.push(`${item}`); 
} 
console.log(diff)
console.log(Object.keys(lilCircle));
console.log(lilSquare.hasOwnProperty('color'));

class Human {                                       //----------------------------------------2
    constructor(firstName, lastName, age, birthday, address) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.birthday = birthday;
      this.address = address;
    }
    newAge(newAge) {
        this.age = newAge;
    }
    newAddress(newAddress) {
        this.address = newAddress;
    }
    get age() { 
      return 2024 - this._birthday; 
    }
    set age(birthday) { 
      this._birthday = birthday; 
    }
  }
  
class Student extends Human {
  constructor(firstName, lastName, age,  birthday, address, faculty, course, group, cardNumber) {
    super(firstName, lastName, age, birthday, address);
    this.faculty = faculty;
    this.course = course;
    this.group = group;
    this.cardNumber = cardNumber;
  }
  newAge(newAge){                           //super для метода
      super.newAge(newAge);
  }
  newCourse(newCourse) {
      this.course = newCourse;
  }
  newGroup(newGroup) {
      this.group = newGroup;
  }
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Faculty {
  constructor(facultyName, Groups, Students) {
    this.facultyName = facultyName;
    this.Groups = Groups;
    this.Students = Students;
  }
  newGroups(newGroups) {
      this.Groups = newGroups;
  }
  newStudents(newStudents) {
      this.Students = newStudents;
  }
  getDev() {
    return this.Students.filter(student => student.cardNumber.substring(1, 2) === '3').length;
  }
  getGroupe(groupNum) {
    return this.Students.filter(student => student.group === groupNum);
  }
}
  
let student1 = new Student('Mila', 'Artsiukh', 18, 2006, 'Minsk', 'FIT', 2, 4, '73231002');
let student2 = new Student('Oleg', 'Petrow', 19, 2005, 'Brest', 'FIT', 1, 5, '73242123');
  
let fit = new Faculty('FIT', 10, [student1, student2]);

console.log(student1.getFullName());
let newAge = 20;
let newAddress = 'Omsk';
student1.newAge(newAge);
student2.newAddress(newAddress);
console.log(student1); 
console.log(student2); 
  
console.log(fit.getDev());
console.log(fit.getGroupe(5));