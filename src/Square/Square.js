import React from 'react';

const Square = props => {
    return (
        <div className="square" id={props.squareID} onClick={(e) => {props.claimSquare(e.target.id)}} style={{height: 100, width: 100, border: '1px solid black'}}>{props.owningPlayer}</div>
    );
};

export default Square;