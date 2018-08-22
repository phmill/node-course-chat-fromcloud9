const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
    var users;
    var user1;
    var user2;
    var user3;
    var user4;
    
    
    beforeEach(() => {
        users = new Users();
        
        user1 = {id: 1, name: 'johnny', room: 'the office'};
        user2 = {id: 2, name: 'eddy', room: 'the pooh'};
        user3 = {id: 3, name: 'pony', room: 'the office'};
        
        users.users = [user1, user2, user3];
    });
    
    it('should add new user', () => {
       var users = new Users();
       var user = {
           id: 123,
           name: 'Johnny',
           room: 'the office'
       };
       
       var returnUser = users.addUser(user.id, user.name, user.room);
       expect(users.users).toEqual([user]);
   });
   
   it('should return names for the office room', () => {
       var arrayNames = users.getUserList('the office');
       
       expect(arrayNames).toEqual(['johnny', 'pony']);
   });
   
   it('should return names for the pooh', () => {
       var arrayNames = users.getUserList('the pooh');
       
       expect(arrayNames).toEqual(['eddy']);
   });
   
   it('should remove a user', () => {
        var userToremove = user2;
        var removedUser = users.removeUser(2);
       
        expect(users.users).toNotInclude(userToremove);
   });
   
   it('should not remove user', () => {
        var savedUsers = users.users;
        var removedUser = users.removeUser(8);
        expect(users.users).toEqual(savedUsers);
   });
   
   it('should find user', () => {
        var idToFind = 2;
        var founddUser = users.getUser(idToFind);
       
        expect(founddUser.id).toEqual(idToFind);
   });
   
   it ('should not find user', () => {
       var idToFind = 99;
        var founddUser = users.getUser(idToFind);
       
        expect(founddUser).toBe(undefined);
   });
});