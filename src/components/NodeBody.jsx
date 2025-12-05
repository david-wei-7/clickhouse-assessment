import React from 'react';

const NodeBody = ({ type, connections }) => {
    const isPrimary = type === 'primary';

    return (
        <div className={`flex-1 p-5 pt-3 ${isPrimary ? 'space-y-3' : ''}`}>
            {isPrimary && connections && (
                <div className="mb-3">
                    <div className="text-xs text-white mb-2 font-medium">Connections</div>
                    <div className="flex items-center gap-4">
                        {connections.direct && (
                            <div className="text-xs text-white">
                                Direct: <span className="text-green-400">{connections.direct.current}</span><span className="text-white">/{connections.direct.max}</span>
                            </div>
                        )}
                        {connections.pgbouncer && (
                            <div className="text-xs text-white">
                                PgBouncer: <span className="text-green-400">{connections.pgbouncer.current}</span><span className="text-white">/{connections.pgbouncer.max}</span>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {!isPrimary && connections && connections.current !== undefined && (
                <div className="text-xs text-white mb-3">
                    Connections: <span className="text-green-400">{connections.current}</span><span className="text-white">/{connections.max}</span>
                </div>
            )}
        </div>
    );
};

export default NodeBody;

