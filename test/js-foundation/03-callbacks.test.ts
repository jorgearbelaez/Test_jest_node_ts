import { get } from 'http';
import {getUserById} from '../../src/js-foundation/03-callbacks';


describe('js-foundation/03-callbacks.ts', ()=> {
    test('getUserById should return uan error if user does not exist', (done)=>{

       const id = 10;

       getUserById(id, (err, user)=>{
              expect(err).toBe(`User not found with id ${id}`);
              expect(user).toBeUndefined();

              done() // this is to tell jest that the test(callback) is done
         })
    })

    test('getUserByID should return a user if it exists', (done)=> {
        const id=2;
        getUserById(id, (err, user)=>{
            expect(user?.name).toContain('Jane Doe')
            expect(err).toBeUndefined();

            done()

        })
    })
})