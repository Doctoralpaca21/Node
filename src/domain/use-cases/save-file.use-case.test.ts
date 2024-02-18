import fs from 'fs';
import {SaveFile} from './save-file.use-case';
describe('SaveFileUseCase', ()=>{

    // beforeEach(()=>{
    //     fs.rmSync('Outputs',{recursive: true})
    // })

    // afterEach(()=>{
    //     fs.rmSync('Outputs',{recursive: true})
    // })

    test('should save file with default values', () => { 
        const saveFile = new SaveFile();
        const filePath = 'Outputs/table.txt'
        const options = {
            fileContent: 'test content'
        }
        const result = saveFile.execute(options);

        expect(result).toBeTruthy();

        const checkFile = fs.existsSync(filePath);
        const fileContent = fs.readFileSync(filePath,{encoding: 'utf-8'});


        expect(checkFile).toBe(true);
        expect(fileContent).toBe(options.fileContent)
    });
})