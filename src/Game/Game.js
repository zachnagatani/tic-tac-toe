import { connect } from 'react-redux';
import Board from '../Board/Board';
import * as actions from '../actions/actions';

const mapStateToProps = state => {
    return {
        currentPlayer: state.currentPlayer,
        xOwnedSquares: state.ownedSquares.x,
        oOwnedSquares: state.ownedSquares.o
    };
};

const mapDispatchToProps = dispatch => {
    return {
        claimSquare: (currentPlayer, squareID) => {
            dispatch(actions.updateOwnedSquares(currentPlayer, squareID));
        },
        changePlayer: () => {
            dispatch(actions.changePlayer());
        }
    }
};

const Game = connect(
    mapStateToProps,
    mapDispatchToProps
)(Board);

export default Game;