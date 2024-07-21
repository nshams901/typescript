const add = ( a: number, b: number): number => {
    return a + b;
}

function divide(a: number, b: number): number{
    return a/b;
}

const logger = (message: string): void => {
    console.log(message);
}

const throwError = ( message: string): never => {
    throw new Error(message);
}
// return type 'never' is used when function is not going to return at any condition. see below example.

const throwNewError = (message : string): string =>{
    if(!message){
        throw new Error(message);
    }else{
        return message
    }
}


const todaysWeather = {
    date: new Date(),
    weather: 'sunny'
}
const logWeather = (forecast : { date: Date, weather: string}): void => {
    console.log(forecast.date);
    console.log(forecast.weather);
}
// destructuring the parameter
const logsWeather =  ({ date, weather} : {date: Date, weather: string}): void => {
    console.log(date);
    console.log(weather);
}
logWeather(todaysWeather);