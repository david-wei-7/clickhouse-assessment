import React from 'react';
import NodeCard from './NodeCard';
import ClusterConnections from './ClusterConnections';
import HABadge from './HABadge';

const ClusterDashboard = ({
    primary = {
        location: 'AWS us-west-2',
        instanceType: 'M-160',
        showMonitoringIcon: true,
        connections: {
            direct: { current: 7, max: 100 },
            pgbouncer: { current: 1, max: 1900 },
        },
        cpu: 0,
        memory: 2,
    },
    replicas = [
        {
            location: 'AWS us-west-2',
            instanceType: 'M-160',
            showMonitoringIcon: true,
            connections: { current: 3, max: 100 },
        },
        {
            location: 'AWS us-west-2',
            instanceType: 'M-160',
            showMonitoringIcon: true,
            connections: { current: 2, max: 100 },
        },
    ],
}) => {
    const nodeWidth = 320;
    const nodeHeight = 200;
    const horizontalSpacing = 120;
    const verticalSpacing = 100;
    const connectorHeight = 60;

    const totalReplicaWidth = replicas.length * nodeWidth + (replicas.length - 1) * horizontalSpacing;
    const containerWidth = Math.max(totalReplicaWidth, nodeWidth);

    const replicaStartX = (replicas.length === 1)
        ? (containerWidth - nodeWidth) / 2
        : (containerWidth - totalReplicaWidth) / 2;

    const connectorY = nodeHeight + verticalSpacing;

    const replicaPositions = replicas.map((_, index) => ({
        x: replicaStartX + index * (nodeWidth + horizontalSpacing),
        y: connectorY + connectorHeight,
    }));

    const primaryX = replicas.length === 1
        ? replicaPositions[0].x
        : (replicaPositions[0].x + replicaPositions[replicas.length - 1].x + nodeWidth) / 2 - nodeWidth / 2;
    const primaryY = connectorY - nodeHeight - connectorHeight - 20;

    const primaryCenterX = primaryX + nodeWidth / 2;
    const primaryBottomY = primaryY + nodeHeight + 20;
    const connectorStartX = replicaPositions[0].x + nodeWidth / 2;
    const connectorEndX = replicaPositions[replicas.length - 1].x + nodeWidth / 2;

    const containerHeight = Math.max(0, primaryY) + nodeHeight + connectorHeight + verticalSpacing + nodeHeight;

    return (
        <div className="relative w-full min-h-[500px] p-10 rounded-2xl overflow-hidden"
            style={{
                background: '#1a1d24',
                backgroundImage: `
                    radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)
                `,
                backgroundSize: '20px 20px',
            }}
        >
            <HABadge />

            <div className="relative flex justify-center items-start" style={{ minHeight: '450px' }}>
                <div className="relative" style={{
                    width: `${containerWidth}px`,
                    height: `${containerHeight}px`
                }}>
                    <ClusterConnections
                        primaryCenterX={primaryCenterX}
                        primaryBottomY={primaryBottomY}
                        connectorY={connectorY}
                        connectorStartX={connectorStartX}
                        connectorEndX={connectorEndX}
                        replicaPositions={replicaPositions}
                        nodeWidth={nodeWidth}
                    />

                    <div
                        className="absolute z-10"
                        style={{
                            left: `${primaryX}px`,
                            top: `${primaryY}px`,
                        }}
                    >
                        <NodeCard
                            type="primary"
                            location={primary.location}
                            instanceType={primary.instanceType}
                            showMonitoringIcon={primary.showMonitoringIcon}
                            connections={primary.connections}
                            cpu={primary.cpu}
                            memory={primary.memory}
                        />
                    </div>

                    {replicas.map((replica, index) => {
                        const pos = replicaPositions[index];
                        return (
                            <div
                                key={`replica-${index}`}
                                className="absolute z-10"
                                style={{
                                    left: `${pos.x}px`,
                                    top: `${pos.y}px`,
                                }}
                            >
                                <NodeCard
                                    type="replica"
                                    location={replica.location}
                                    instanceType={replica.instanceType}
                                    showMonitoringIcon={replica.showMonitoringIcon}
                                    connections={replica.connections}
                                    cpu={replica.cpu}
                                    memory={replica.memory}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default ClusterDashboard;
