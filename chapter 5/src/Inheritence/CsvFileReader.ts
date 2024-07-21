import fs from 'fs'
// import { stringToDate } from './utils';
// import { matchResults } from './matchResult';
import { type } from 'os';
import { matchResults } from '../matchResult';

type MatchData = [Date, string, string, number, number, matchResults, string];

export abstract class CsvFileReader <T> {           // <T> - called generic
    data: T[] = [];

    constructor(public filename: string) { };

    abstract mapRow(row: string[]): T;

    read(): void {
        this.data = fs.readFileSync(this.filename, {
            encoding: 'utf-8'
        }).split('\n')
            .map((item: string): string[] => {
                return item.split(',')
            })
            .map(this.mapRow);
    }
}



// ------------------------ NOTES ----------------------------
// const reader = new CsvFileReader('./football.csv')   -> error : you can't create an instance of abstract class.
// Whenever we use generic class ( e.g CsvFileReader ), we have to profide generic type.