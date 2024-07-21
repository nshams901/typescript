// class is a blue-print of an object.
// modifier in class - 1) public    - this method can be called anywhere anytime
//                     2) private   - this method can be called inside the class only
//                     3) protected - this method can be called inside the class or by child class.


class Vehicle {
    drive(): void {
        console.log('engine start...')
    };
    protected horn(): void{
        console.log('loud')
    }
}

const vehicle = new Vehicle();
vehicle.drive();
// vehicle.horn();              // method 'horn' is protected

class Car extends Vehicle {
    // overriding the vehicle method
    horn(): void {
        console.log('noise')
    }
};
const car = new Car();
car.horn();


// ------------------ fields and constructor in class ----------------

class Person {
    constructor(public name: string){
    }
}

const person1 = new Person('Aman');
person1.name;                       // Aman

// child class of person-
class Teacher extends Person{
    constructor(public subject: string, name: string){

        // super call the parent constructor passing the argument name.
        super(name);                                    // whenever we call the constructor in child class we have to call the constructor of parent class using super keyword
    }
}

const teacher1 = new Teacher('math', 'Rahul');