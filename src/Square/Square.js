import React from 'react';

const Square = props => {
    return (
        <div className="square" id={props.squareID}>{props.player}</div>
    );
};

export default Square;