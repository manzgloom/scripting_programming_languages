let person = {                     //-------------------------1
    name: "Джон",
    age: 30,
    greet() {
      console.log("Привет, ", this.name); 
    },
    ageAfterYears(years) {
        console.log("Возраст: ", years + this.age); 
    }
};
let person2 = person;
let years = 15;
person.greet();
person.ageAfterYears(years);
  
let car = {                     //-------------------------2
    model: "Ford",
    year: 2021,
    getInfo() {
      console.log(`Модель: ${this.model}. Год выпуска: ${this.year}`); 
    }
};
car.getInfo();

function Book(title, author) {             //-----------------------------3
  this.title = title;
  this.author = author;

  this.getTitle = function() {
    console.log( "Название: " + this.title);
  };
  this.getAuthor = function() {
    console.log( "Автор: " + this.author);
  };
}

let book = new Book("Перегрузка", "Артур Хейли");
book.getTitle(); 
book.getAuthor(); 

let team = {                           //-------------------------4
  players: [
    {num: 1, name: "Алексей", age: 23},
    {num: 2, name: "Артур", age: 35},
    {num: 3, name: "Олег", age: 25}
  ],
  print() {
    this.players.forEach((player) =>
        console.log(player.num, player.name, player.age));
    }
  }
team.players[1].age = 20;
team.print();

const counter = (function() {       //-----------------------5
  let count = 0; 
  return { 
    increment: function() {
      count += 1; 
      return count; 
    }, 
    decrement: function() { 
      count -= 1; 
      return count; 
    }, 
    getCount: function() { 
      return count; 
    } 
  };
})();
  
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount()); // 1

let item = {                   //----------------------6
  price: 100
}
console.log(item.price);
Object.defineProperty(item, 'price', {
    writable: false,
    configurable: false
});
item.price = 400; 
console.log(item.price); 
delete item.price; 
console.log(item.price)

let circle = {                   //----------------------7
  radius: 5,
  get area() {
    return Math.PI*Math.pow(this.radius, 2);
  },
  get change() {
    return this.radius; 
  },
  set change(new_radius) {
    this.radius = new_radius;
  } 
}
console.log(`Радиус: ${circle.radius}`); 
console.log(`Площадь: ${circle.area}`);
circle.change = 10; 
console.log(`Новый радиус: ${circle.radius}`); 

let new_car = {                   //----------------------8
  make: "Ford",
  model: "Focus",
  year: 2006
}
console.log(new_car);
Object.defineProperties(new_car, {
  make: { writable: false, configurable: false, enumerable: false },
  model: { writable: false, configurable: false, enumerable: false },
  year: { writable: false, configurable: false, enumerable: false },
});
new_car.make  = "Toyota";
new_car.year  = "Civic";
new_car.year  = 2007;
console.log(new_car);

let nums = [1, 2, 3, 4];         //------------------9
Object.defineProperty(nums, 'sum', { 
  get: function() { 
    return this.reduce((sum, elem) => sum + elem, 0); 
  }, 
  configurable: false  
  }); 
console.log(nums.sum);
nums.sum = 100; 
console.log(nums.sum); 

let rectangle = {                   //----------------------10
  width: 5,
  height: 7,
  get area() {
    return this.width*this.height;
  },
  get W() { 
    return this.width; 
  },
  set W(value) { 
    this.width = value;
  },
  get H() { 
    return this.height; 
  },
  set H(value) {
    this.height = value; 
  }
}
rectangle.W = 45;
console.log(`Высота: ${rectangle.height}`); 
console.log(`Ширина: ${rectangle.width}`); 
console.log(`Площадь: ${rectangle.area}`);

let user = {              //-----------------11
  firstName: 'Mila', 
  lastName: 'Artsiukh', 
  get fullName() { 
    return `${this.firstName} ${this.lastName}`; 
  }, 
  set fullName(name) { 
    let parts = name.split(' '); 
    this.firstName = parts[0]; 
    this.lastName = parts[1];
  },  
};

console.log(user.fullName); 
user.fullName = 'Mike Posher'; 
console.log(user.fullName);