interface Vehicles {
    name: string,
    year: number,
    broken: boolean,
    color?: string, // ? makes the color property optional.
    summery(): string,
}

const oldCivic: Vehicles = {
    name: 'civic',
    year: 2000,
    broken: true,
    summery(): string {
        return `Name: ${this.name}`
    }
};

// printVehicle function only accept the when object when it satisfies Vehicle interface.
const printVehicle = (vehicle : Vehicles ): void=> {
    console.log(vehicle.name);
    console.log(vehicle.year);
    console.log(vehicle.broken);
}
printVehicle(oldCivic);


// create the interface by using the other interface.

interface TwoWheelers extends Vehicles {
    wheels: number,
    summery(): string,
    brand: string,
    model: string,
}

let myBike : TwoWheelers = {
    name: 'bike',
    year: 2000,
    broken: true,
    wheels: 2,
    brand: 'Hero',
    model: 'Apache',
    summery(): string {
        return `It is launched in ${this.year}` 
    }
}

console.log(myBike.summery());
