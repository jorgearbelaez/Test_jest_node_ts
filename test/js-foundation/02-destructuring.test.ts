import { characters } from '../../src/js-foundation/02-destructuring';


describe('js-foundation/02-destructuring.ts', ()=> {
    
    test('characters should contain Flash, Batman ', ()=>{

        
       expect(characters).toContain('Flash');
       expect(characters).toContain('Batman');
    })
    test('first character should be Flash, and second Superman', ()=>{
        const  [first, second] = characters;
        // to evaluate the position in the array of characters

        expect(second).toBe('Superman');
        expect(first).toBe('Flash');
    })
})