let apples: number = 5;
let fullName: string = "Mike Hesson";
let isPerson: boolean = true;
let notFound: undefined = undefined;
let isEmpty: null = null;

// built in objects
let now: Date = new Date();

// Array
let colors:string[] = ['red', 'blue'];
let num: number[] = [1, 4, 6];

// classes
class Car {

}
let car: Car = new Car();

// Object literal
let point: { x: number, y: number} = {
    x: 10,
    y: 14
};

// Function
let logNumber : ( i: number) => void = (i) => {
    console.log(i);
}

// Annotation vs Inference
let num1: number = 5;       // we explicitly tell that num1 is a number ( example of annotation)
let num2 = 5;               // typescript implicitly define that num2 is a number ( example of inference)


// when to use annotations.
// 1) Function that returns the 'any' type
const json = '{"x": 10, "y", 20}';
const coordinates = JSON.parse(json);
console.log(coordinates);       // { x: 10, y: 20 }
// 👆 here typescript not able to figure out the type of coordinate, so use annotations

// 2) when we declare a variable in one line and initialize later.
let color = ['red', 'blue', 'green']
let foundColor;
for (let i=0; i < color.length; i++){
    if(color[i] === 'blue'){
        foundColor = true;
    }
}
// 👆 here typescript not able to figure out the type of foundColor, so use annotations

// 3) Variable whose type can't be inferred correctly
let numbers = [-10, -2, 20];
let numberAboveZero;
for (let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        numberAboveZero = numbers[i];
    }else {
        numberAboveZero = false;
    }
}
// 👆 here typescript not able to figure out the type of numberAboveZero, so use annotations
