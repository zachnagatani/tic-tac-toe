import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

export const CoverPresentational = props => {
    return (
        <div className={!props.gameStartStatus ? 'cover' : 'cover cover--hidden'} onClick={props.toggleGameStartStatus}></div>
    );
};

const mapStateToProps = state => {
    return {
        gameStartStatus: state.gameStartStatus
    };
};

const mapDispatchToProps = dispatch => {
    return {
        toggleGameStartStatus: () => {
            dispatch(actions.gameStart())
        }
    };
};

const Cover = connect(
    mapStateToProps,
    mapDispatchToProps
)(CoverPresentational);

export default Cover;