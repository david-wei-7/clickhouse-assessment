import React from 'react';

const ConnectionLine = ({ x, y, width, height, isVertical }) => {
    const svgWidth = isVertical ? Math.max(width, 10) : width;
    const svgHeight = isVertical ? height : Math.max(height, 10);
    const centerX = svgWidth / 2;
    const centerY = svgHeight / 2;

    const path = isVertical
        ? `M ${centerX} 0 L ${centerX} ${svgHeight}`
        : `M 0 ${centerY} L ${svgWidth} ${centerY}`;

    const adjustedX = isVertical ? x - centerX : x;
    const adjustedY = isVertical ? y : y - centerY;

    return (
        <svg
            className="absolute pointer-events-none z-0"
            style={{
                left: `${adjustedX}px`,
                top: `${adjustedY}px`,
                width: `${svgWidth}px`,
                height: `${svgHeight}px`,
            }}
            viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        >
            <path
                d={path}
                stroke="#9ca3af"
                strokeWidth="2"
                strokeDasharray="4,4"
                strokeOpacity="0.6"
                fill="none"
            />
        </svg>
    );
};

export default ConnectionLine;

