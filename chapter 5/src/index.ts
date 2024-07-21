import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { matchResults } from "./matchResult";


// Create an object that satisfies the "DataReader" interface.
const csvFileReader = new CsvFileReader('football.csv');


// Create an instance of MatchReader and pass in something satisfying the "DataReader" interface.
const matchReader = new MatchReader(csvFileReader)
matchReader.load();

let manUnitedWins= 0;

for(let match of matchReader.matches){
    // man united won as home team.
    if( match[1] === 'Man United' && match[5] === matchResults.homeWin){
        manUnitedWins++;
    }else if( match[2] === 'Man United' && match[5] === matchResults.awayWin){
        manUnitedWins++
    }
}

console.log(`Man united won ${manUnitedWins} games`);
