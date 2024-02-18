// import {yarg} from "./yargs.plugin"
const runCommand =  async(args: string[]) =>{
    process.argv = [...process.argv, ...args]

    const {yarg} = await import('./yargs.plugin');

    return yarg;
}

describe('Test args plugins', () => { 
    test('should return default values', async() => { 
        const argv = await runCommand(['-b', '9']);

        // console.log(argv)

        expect(argv).toEqual(expect.objectContaining({
            b:9,
            l:10,
            s:false,
            n:'table',
            d: '/Outputs'
        })
        )
     })
 })