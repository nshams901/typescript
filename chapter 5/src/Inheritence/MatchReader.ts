import { matchResults } from "../matchResult";
import { stringToDate } from "../utils";
import { CsvFileReader } from "./CsvFileReader"
// import { matchResults } from "./matchResult"
// import { stringToDate } from "./utils"
type MatchData = [Date, string, string, number, number, matchResults, string];


export class MatchReader extends CsvFileReader <MatchData> {
        mapRow ( row: any ) : any {
            return [
                stringToDate(row[0]),
                row[1],
                row[2],
                parseInt(row[3]),
                parseInt(row[4]),
                row[5] as matchResults,         // type assertion
                row[6]
            ]
        }
}