import ownedSquares from './ownedSquares';
import * as types from '../actions/actionTypes';

describe('Owned squares reducer', () => {
    it('should return its initial state', () => {
        expect(ownedSquares(undefined, {}))
            .toEqual({
                x: [],
                o: []
            });
    });

    it('should handle UPDATE_OWNED_SQUARES', () => {
        expect(ownedSquares(undefined,
            {
                type: types.UPDATE_OWNED_SQUARES,
                payload: {
                    currentPlayer: 'x',
                    squareID: 'square1'
                }
            }))
            .toEqual({
                x: ['square1'],
                o: []
            });
    });

    it('should handle RESET_OWNED_SQUARES', () => {
        expect(ownedSquares(
            {
                x: ['square1', 'square4', 'square7'],
                o: ['square2', 'square5']
            }, {type: types.RESET_OWNED_SQUARES }))
            .toEqual({ x: [], o: [] });
    });
});