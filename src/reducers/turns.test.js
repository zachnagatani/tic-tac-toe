import numOfTurns from './turns';
import * as types from '../actions/actionTypes';

describe('Turns reducer', () => {
    it('should return its intial state', () => {
        expect(numOfTurns(undefined, {})).toEqual(0);
    });

    it('should handle INCREMENT_TURN_COUNTER', () => {
        expect(numOfTurns(0, { type: types.INCREMENT_TURN_COUNTER })).toEqual(1);
        expect(numOfTurns(1, { type: types.INCREMENT_TURN_COUNTER })).toEqual(2);
    });

    it('should handle RESET_TURN_COUNTER', () => {
        expect(numOfTurns(9, { type: types.RESET_TURN_COUNTER })).toEqual(0);
    });
});