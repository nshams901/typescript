interface Vehicles {
    name: string,
    year: number,
    broken: boolean,
    summery(): string
}

const oldCivic = {
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