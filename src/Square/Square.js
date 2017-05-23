import React from 'react';

const Square = props => {
    return (
        <div className="square" id={props.squareID}>{props.owningPlayer}</div>
    );
};

export default Square;