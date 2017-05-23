import currentPlayer from './currentPlayer';
import * as types from '../actions/actionTypes';

describe('Current players reducer', () => {
    it('should return the intial state', () => {
        expect(currentPlayer(undefined, {})).toEqual('x');
    });

    it('should handle CHANGE_PLAYER', () => {
        expect(currentPlayer('o', { type: types.CHANGE_PLAYER })).toEqual('x');
    });

    it('should handle RESET_PLAYER', () => {
        expect(currentPlayer('o', { type: types.RESET_PLAYER })).toEqual('x');
    });
});