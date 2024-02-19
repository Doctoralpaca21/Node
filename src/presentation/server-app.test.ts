import { ServerApp } from './server-app'
import { CreateTable } from '../domain/use-cases/createTable.use-case';
import { SaveFile } from '../domain/use-cases/save-file.use-case';
describe('ServerApp', () => {

    const options = {
        base: 2,
        limit: 10,
        showTable: false,
        name: 'test-filename',
        destination: 'test-destination'
    }

    beforeEach(()=>{
        jest.clearAllMocks();
    })
    test('should create server App instance', () => {
        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function')
    });

    test('should run server app with options', () => {
        // const logSpy = jest.spyOn(console, 'log')
        // const createTableSpy = jest.spyOn(CreateTable.prototype, 'execute');
        // const saveFileSpy = jest.spyOn(SaveFile.prototype, 'execute')

        // ServerApp.run(options);

        // expect(logSpy).toHaveBeenCalledTimes(3);
        // expect(logSpy).toHaveBeenCalledWith('Server running ...')

        // expect(createTableSpy).toHaveBeenCalledTimes(1);
        // expect(createTableSpy).toHaveBeenCalledWith({
        //     base: options.base, limit: options.limit
        // })

        // expect(saveFileSpy).toHaveBeenCalledTimes(1);
        // expect(saveFileSpy).toHaveBeenCalledWith({
        //     fileContent: expect.any(String),
        //     name: options.name,
        //     destination: options.destination,

        // })
    });

    test('should run with custom values mocked', () => {

        const createMock = jest.fn().mockReturnValue('2 x 1 = 2')
        const saveFileMock = jest.fn();
        const logMock = jest.fn();

        console.log = logMock;
        CreateTable.prototype.execute = createMock;
        SaveFile.prototype.execute = saveFileMock;

        ServerApp.run(options)

        expect(logMock).toHaveBeenCalledWith('Server running ...');
        expect(createMock).toHaveBeenCalledWith({"base": options.base, "limit": options.limit})
        expect(saveFileMock).toHaveBeenCalledWith({
            destination: options.destination,
            fileContent: '2 x 1 = 2',
            fileName: options.name
        })
        
    })

})