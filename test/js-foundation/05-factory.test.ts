import { buildMakePerson } from '../../src/js-foundation/05-factory';



describe('js-foundation/05-factory.ts', () => {

    const getUUID = () => '1234';
    const getAge= () => 35;

   test('buildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({getUUID, getAge});
        // expect(makePerson).toBeInstanceOf(Function); 
        expect(typeof makePerson).toBe('function');
       
    })

    test('makePerson should return an object', () => {
        const makePerson = buildMakePerson({getUUID, getAge});
        const person = makePerson({name: 'John', birthdate: '1985-10-21'});
        expect(person).toBeInstanceOf(Object);
        expect(person).toEqual({
            id: '1234',
            name: 'John', 
            birthdate: '1985-10-21',
            age: 35});
    })
})