const carMakers = ['ford', 'toyota', 'tata'];

const carsByMake: string[][] = [ ['f15'], ['bolero'] ];

// Help with inference when extracting values
const car = carMakers[0];       // car : string -> typscript uses inference to decide the type of car.
const lastCar = carMakers.pop();

// Prevent to push the incompatible values
// carMakers.push(100)      // error -> carMakers only contains string

// Using map
carMakers.map((car: string) : string => {
    return car.toUpperCase();
});

// Flexible types
const importantDates: ( Date | string) [] = [new Date()];
importantDates.push('10-10-2022');
importantDates.push(new Date());
// importantDates.push(2022)        // it gives error because 2022 is neither a 'Date' type nor a 'string'.
