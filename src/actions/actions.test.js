import * as actions from './actions';
import * as types from './actionTypes';

describe('Change player action', () => {
    it('should create an action to change the current player', () => {
        const expectedAction = {
            type: types.CHANGE_PLAYER
        };

        expect(actions.changePlayer()).toEqual(expectedAction);
    });
});

describe('Increment turn counter action', () => {
    it('should create an action to increment the turn counter', () => {
        const expectedAction = {
            type: types.INCREMENT_TURN_COUNTER
        };

        expect(actions.incrementTurnCounter()).toEqual(expectedAction);
    });
});

describe('Update owned squares action', () => {
    it('should create an action to update a player\'s owned square', () => {
        const currentPlayer = 'x',
              squareID = 'square1',
              expectedAction = {
                  type: types.UPDATE_OWNED_SQUARES,
                  payload: {
                      currentPlayer,
                      squareID
                  }
              };

        expect(actions.updateOwnedSquares('x', 'square1')).toEqual(expectedAction);
    });
});

describe('Win status action', () => {
    it('should create an action to update the win status of the game', () => {
        const winner = 'o',
              expectedAction = {
                  type: types.WIN_STATUS,
                  payload: {
                      winner
                  }
              };

        expect(actions.winStatus(winner)).toEqual(expectedAction);
    });
});

describe('Game start status action', () => {
    it('should create an action to update the game start status', () => {
        const expectedAction = {
            type: types.GAME_START
        };

        expect(actions.gameStart()).toEqual(expectedAction);
    });
});

describe('Reset player action', () => {
    it('should create an action to reset the current player', () => {
        const expectedAction = {
            type: types.RESET_PLAYER
        };

        expect(actions.resetPlayer()).toEqual(expectedAction);
    });
});

describe('Reset turn counter action', () => {
    it('should create an action to reset the turn counter', () => {
        const expectedAction = {
            type: types.RESET_TURN_COUNTER
        };

        expect(actions.resetTurnCounter()).toEqual(expectedAction);
    });
});

describe('Reset owned square action', () => {
    it('should create an action to reset the owned squares', () => {
        const expectedAction = {
            type: types.RESET_OWNED_SQUARES
        };

        expect(actions.resetOwnedSquares()).toEqual(expectedAction);
    });
});

describe('Reset win status action', () => {
    it('should create an action to reset the win status', () => {
        const expectedAction = {
            type: types.RESET_WIN_STATUS
        };

        expect(actions.resetWinStatus()).toEqual(expectedAction);
    });
});