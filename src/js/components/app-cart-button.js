import React from 'react';

export  default (props) => {
    return (
        <button
            className="mdl-button mdl-js-button mdl-button--raised"
            onClick={props.handler}>
            {props.txt}
        </button>
    )
}