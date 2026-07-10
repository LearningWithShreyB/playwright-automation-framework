import fs from 'fs';
import { parse } from 'csv-parse/sync';
import { LoginData } from '../interfaces/LoginData';

export class DataProvider {

    static getTestDataFromJson(filePath: string): LoginData[] {
        return JSON.parse(fs.readFileSync(filePath, 'utf8'));
    }


    static getTestDataFromCsv(filePath: string): LoginData[] {
        return parse(
            fs.readFileSync(filePath, 'utf8'),
            {
                columns: true,
                skip_empty_lines: true
            }
        ) as LoginData[];
    }


}