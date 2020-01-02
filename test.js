// Import de la librairie assert
let assert = require('assert');

// Import du fichier à tester
let script = require('./script');

describe('same items', () => {
    it('should return match nul', () => {
        assert.equal(getScore('paper','paper'), 'match nul');
        assert.equal(getScore('rock','rock'), 'match nul');
        assert.equal(getScore('cisors','cisors'), 'match nul');
    });
});

describe('Game', () => {
    it('the winner is player 1', () => {
        assert.equal(getScore('rock','cisors'), 'the winner is player 1');
        assert.equal(getScore('paper','rock'), 'the winner is player 1');
        assert.equal(getScore('cisors','paper'), 'the winner is player 1');
    });
});

describe('Game', () => {
    it('the winner is player 2', () => {
        assert.equal(getScore('rock','paper'), 'the winner is player 2');
        assert.equal(getScore('paper','cisors'), 'the winner is player 2');
        assert.equal(getScore('cisors','rock'), 'the winner is player 2');
    });
});
