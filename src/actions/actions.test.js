import * as actions from './actions';
import * as types from './actionTypes';

describe('Change player action', () => {
    it('should create an action to change the current player', () => {
        const expectedAction = {
            type: types.CHANGE_PLAYER
        };

        expect(actions.changePlayer().type).toEqual(types.CHANGE_PLAYER);
    });
});

describe('Increment turn counter action', () => {
    it('should create an action to increment the turn counter', () => {
        const expectedAction = {
            type: types.INCREMENT_TURN_COUNTER
        };

        expect(actions.incrementTurnCounter().type).toEqual(types.INCREMENT_TURN_COUNTER);
    });
});

describe('Update owned squares action', () => {
    it('should create an action to update a player\'s owned square', () => {
        const squareID = 'square1',
              expectedAction = {
                  type: types.UPDATE_OWNED_SQUARES,
                  payload: {
                      squareID
                  }
              };

        expect(actions.updateOwnedSquares('square1')).toEqual(expectedAction);
    });
});