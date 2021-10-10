import React from 'react'

const Restart = ({ onClick, disabled }) => {
    return (
        <button className="restart" onClick={onClick}>
            Restart
        </button>
    )
};

export default Restart
