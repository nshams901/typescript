const person = {
    personName: "Michael",
    age: 20,
    coord: {
        lat: 0,
        lng: 20
    },
    setAge(age: number): void{
        this.age = age
    }
};
const { age, personName}: { age: number, personName: string} = person;

const { coord: { lat, lng}}: { coord : { lat: number, lng: number}} = person;