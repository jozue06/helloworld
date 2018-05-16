const greet = require('../lib/greet.js');


describe('Greet Module', () =>{

it('Should return null when passed non string', () => {

expect(greet()).toBeNull();
});

it('should return "hello ryo" when passed ryo', () => {

expect(greet('ryo')).toBe('hello ryo');
});

});