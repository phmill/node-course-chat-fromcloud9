const expect = require('expect');

const {isRealString} = require('./validation');

describe ('isRealString', () => {
   it('should reject non string values', () => {
       var value = 1;
       var returnValue = isRealString(value);
       
       expect(returnValue).toBe(false);
       
   });
   
   it('should reject string with only spaces', () => {
      var value = '   ' ;
      var returnValue = isRealString(value);
      
       expect(returnValue).toBe(false);
   });
   
   it('should allow string with non-space characters', () => {
      var value = '  1 ' ;
      var returnValue = isRealString(value);
      
       expect(returnValue).toBe(true);
   });
});
