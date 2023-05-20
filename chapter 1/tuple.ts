// Tuple - array like data structure where each element represents some property of a record

const drink = {
    color: 'brown',
    carbonated: true,
    sugar: 40
};

const pepsi = ['brown', true, 40];      // here we can change the value type,
                                        // but what if we want to type remain in same order ( string -> boolean -> number) 
                                        // here-> 🕵️‍♂️ tuple comes in picture.

const myPepsi : [string, boolean, number] = ['brown', true, 40];

// using type alias
type Drink = [string, boolean, number];
const sprite: Drink = ['green', true, 55];
const tea : Drink = ['brown', false, 10];