import React from 'react';

const NodeFooter = ({ instanceType, cpu, memory }) => {
    return (
        <div className="flex items-center justify-between p-5 pt-3 border-t border-gray-700/40 bg-gray-700/40">
            {instanceType && (
                <div className="text-sm text-white font-medium">
                    {instanceType}
                </div>
            )}

            {(cpu !== null || memory !== null) && (
                <div className="text-xs text-white font-medium">
                    {cpu !== null && <span>CPU: {cpu}%</span>}
                    {cpu !== null && memory !== null && <span> </span>}
                    {memory !== null && <span>Mem: {memory}%</span>}
                </div>
            )}
        </div>
    );
};

export default NodeFooter;

