import turnsReducer from './turns';
import { INCREMENT_TURN_COUNTER } from '../actions/actionTypes';

describe('Turns reducer', () => {
    it('should return its intial state', () => {
        expect(turnsReducer(undefined, {})).toEqual(null);
    });

    it('should handle incrementing the number of turns so far', () => {
        expect(turnsReducer(null, INCREMENT_TURN_COUNTER)).toEqual(1);
        expect(turnsReducer(1, INCREMENT_TURN_COUNTER)).toEqual(2);
    });
});