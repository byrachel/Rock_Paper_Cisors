// Import de la librairie assert
let assert = require('assert');

// Import du fichier à tester
let script = require('./script');

describe('same items', () => {
    it('should return match nul', () => {
        assert.equal(getScore(0,0), 'match nul');
        assert.equal(getScore(1,1), 'match nul');
        assert.equal(getScore(2,2), 'match nul');
    });
});


