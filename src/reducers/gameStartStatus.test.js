import gameStartStatus from './gameStartStatus';
import * as types from '../actions/actionTypes';

describe('Game start status reducer', () => {
    it('should return the intial state', () => {
        expect(gameStartStatus(undefined, {})).toEqual(false);
    });

    it('should handle a game start status action', () => {
        expect(gameStartStatus(false, { type: types.GAME_START })).toEqual(true);
    });
});