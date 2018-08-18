var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe ('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'mill';
        var text = 'some fucking test'
        var message = generateMessage(from, text);
        
        expect(message).toInclude({from, text});
        expect(message.createdAt).toBeA('number');
    });
});

describe ('generateLocationMessage', () => {
    it('should generate correct location message object', () => {
        var from = 'mill';
        var latitude=1;
        var longitude=1;
        var url = 'https://www.google.com/maps?q=1,1'
        var message = generateLocationMessage(from, latitude, longitude);
        
        expect(message).toInclude({from, url});
        expect(message.createdAt).toBeA('number');
    });
});