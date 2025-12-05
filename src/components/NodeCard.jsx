import React from 'react';
import NodeHeader from './NodeHeader';
import NodeBody from './NodeBody';
import NodeFooter from './NodeFooter';

const NodeCard = ({
    type = 'replica',
    location = '',
    instanceType = '',
    showMonitoringIcon = false,
    connections = null,
    cpu = null,
    memory = null,
}) => {
    return (
        <div className="relative">
            <div className="relative flex flex-col rounded-lg border border-gray-700/60 bg-gray-800/80 backdrop-blur-sm min-w-[320px] transition-all hover:shadow-lg hover:shadow-gray-900/50 hover:border-gray-600 overflow-hidden">
                <NodeHeader
                    type={type}
                    location={location}
                    showMonitoringIcon={showMonitoringIcon}
                />
                <NodeBody
                    type={type}
                    connections={connections}
                />
                <NodeFooter
                    instanceType={instanceType}
                    cpu={cpu}
                    memory={memory}
                />
            </div>
        </div>
    );
};

export default NodeCard;
