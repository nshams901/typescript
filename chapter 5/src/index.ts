import { CsvFileReader } from "./CsvFileReader";
import { MatchReader } from "./MatchReader";
import { matchResults } from "./matchResult";

const reader = new CsvFileReader('./football.csv')
// reader.read()

// console.log(typeof reader);


let manUnitedWins= 0;

for(let match of reader.data){
    // man united won as home team.
    if( match[1] === 'Man United' && match[5] === matchResults.homeWin){
        manUnitedWins++;
    }else if( match[2] === 'Man United' && match[5] === matchResults.awayWin){
        manUnitedWins++;
    }
}

console.log(`Man united won ${manUnitedWins} games`);
