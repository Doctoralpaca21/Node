import { CreateTable } from './createTable.use-case'

describe('CreateTableUseCase', () => {
    test('should create table with default values', () => {
        const createTable = new CreateTable();

        const table = createTable.execute({ base: 2 });
        const row = table.split('\n').length;

        // expect(table).toBeInstanceOf(CreateTable);
        expect(row).toBe(11)
    })

    test('should create table with custom values', () => {
        const options = {
            base: 3,
            limit: 20
        }
        const createTable = new CreateTable();
        const table = createTable.execute(options);
        const row = table.split('\n').length;

        expect(table).toContain('3 x 1 = 3');
        expect(row).toBe(21)
    })
})