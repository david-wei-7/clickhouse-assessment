import React from 'react';
import ConnectionLine from './ConnectionLine';
import ConnectionCircle from './ConnectionCircle';

const ClusterConnections = ({
    primaryCenterX,
    primaryBottomY,
    connectorY,
    connectorStartX,
    connectorEndX,
    replicaPositions,
    nodeWidth,
}) => {
    return (
        <>
            <ConnectionLine
                x={primaryCenterX}
                y={primaryBottomY}
                width={1}
                height={connectorY - primaryBottomY}
                isVertical={true}
            />

            <ConnectionLine
                x={connectorStartX}
                y={connectorY}
                width={connectorEndX - connectorStartX}
                height={1}
                isVertical={false}
            />

            {replicaPositions.map((replicaPos, index) => {
                const replicaCenterX = replicaPos.x + nodeWidth / 2;
                const verticalLineStartY = connectorY;
                const verticalLineHeight = replicaPos.y - connectorY;

                return (
                    <ConnectionLine
                        key={`replica-vertical-${index}`}
                        x={replicaCenterX}
                        y={verticalLineStartY}
                        width={1}
                        height={verticalLineHeight}
                        isVertical={true}
                    />
                );
            })}

            <ConnectionCircle x={primaryCenterX} y={primaryBottomY} />

            {replicaPositions.map((replicaPos, index) => {
                const replicaCenterX = replicaPos.x + nodeWidth / 2;
                return (
                    <ConnectionCircle
                        key={`replica-circle-${index}`}
                        x={replicaCenterX}
                        y={replicaPos.y}
                    />
                );
            })}
        </>
    );
};

export default ClusterConnections;

