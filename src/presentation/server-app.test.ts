import {ServerApp} from './server-app'
describe('ServerApp', () => { 
    test('should create server App instance', () => { 
        const serverApp = new ServerApp();
        expect(serverApp).toBeInstanceOf(ServerApp);
        expect(typeof ServerApp.run).toBe('function')
     })
 })