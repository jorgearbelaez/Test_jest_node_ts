
import { emailTemplate } from '../../src/js-foundation/01-template';


describe('js-foundation/01-template.ts', ()=> {
    
    test('email template should contain a greeting', ()=>{


        expect(emailTemplate).toContain('Thank you')
        
    })
    test('email template should contain {{name}} and {{orderID}}', ()=>{


        expect(emailTemplate).toMatch(/{{name}}/);
        expect(emailTemplate).toMatch(/{{orderId}}/);
    })
})

