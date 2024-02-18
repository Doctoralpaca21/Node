// import {yarg} from "./yargs.plugin"
const runCommand = async (args: string[]) => {
    process.argv = [...process.argv, ...args]

    const { yarg } = await import('./yargs.plugin');

    return yarg;
}

describe('Test args plugins', () => {
    const originalArgs = process.argv;
    beforeEach(()=>{
        process.argv = originalArgs;
        jest.resetModules()
    })

    test('should return default values', async () => {
        const argv = await runCommand(['-b', '9']);

        // console.log(argv)

        expect(argv).toEqual(expect.objectContaining({
            b: 9,
            l: 10,
            s: false,
            n: 'table',
            d: '/Outputs'
        })
        )
    });

    test('should return configuration with custom values', async () => {
        const argv = await runCommand(['-b', '9', '-l', '20', '-s', '-n','custom-name','-d', 'custom-dir']);

        expect(argv).toEqual(expect.objectContaining({
            b: 9,
            l: 20,
            s: true,
            n: 'custom-name',
            d: 'custom-dir'
        })
        )
    })
})