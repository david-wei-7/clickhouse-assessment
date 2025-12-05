import React from 'react';

const ConnectionCircle = ({ x, y }) => {
    return (
        <div
            className="absolute z-20 w-2.5 h-2.5 rounded-full bg-gray-500 border border-gray-400"
            style={{
                left: `${x - 5}px`,
                top: `${y - 5}px`,
            }}
        />
    );
};

export default ConnectionCircle;

