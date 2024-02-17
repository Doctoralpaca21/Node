import fs from "fs";

export interface SaveFileUseCase {
    execute: (options: SaveFileOptions) => boolean;
}

export interface SaveFileOptions {
    fileContent: string,
    destination?: string,
    fileName?: string;
}

export class SaveFile implements SaveFileUseCase {
    constructor() {
        /**Repository  */
    }
    execute({ fileContent, destination = 'Outputs', fileName = 'table' }: SaveFileOptions): boolean {

        try {
            fs.mkdirSync(destination, { recursive: true });
            fs.writeFileSync(`${destination}/${fileName}.txt`, fileContent); 
            console.log('The file has been saved!');
            
            return true

        } catch (error) {
            console.log(error);
            return false;
        }

    }
}