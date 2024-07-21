// NOTE: An empty interface, {} and Object all represent any non-nullish value —not "an empty object" as you might think

interface AnyNonNullishValue {} // equivalent to `type AnyNonNullishValue = {}`

let value : AnyNonNullishValue;

value = 1;
value = 'foo';
value = () => alert("foo");
value = {};
value = { foo: "bar" };

// 👆 these are all fine, but might not be expected

// 👇 these are errors
//     value = undefined;
//     value = null;



