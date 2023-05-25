import { faker } from "@faker-js/faker";

export class Company {
    companyName: string;
    catchPhase: string;
    location: {
        lat: number,
        lng: number
    };
    constructor(){
        this.companyName = faker.company.name();
        this.catchPhase = faker.company.catchPhrase();
        this.location = {
            lat: faker.location.latitude(),
            lng: faker.location.latitude()
        }

    }

    markerContent(): string{
        return `
        <div>
            <h2>Company Name: ${this.companyName}<h2>
            <h5>Catch Phrase: ${this.catchPhase}</h5>
        </div>
        `
    }
}