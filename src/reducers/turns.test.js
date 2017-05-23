import numOfTurns from './turns';
import { INCREMENT_TURN_COUNTER } from '../actions/actionTypes';

describe('Turns reducer', () => {
    it('should return its intial state', () => {
        expect(numOfTurns(undefined, {})).toEqual(0);
    });

    it('should handle incrementing the number of turns so far', () => {
        expect(numOfTurns(0, { type: INCREMENT_TURN_COUNTER })).toEqual(1);
        expect(numOfTurns(1, { type: INCREMENT_TURN_COUNTER })).toEqual(2);
    });
});