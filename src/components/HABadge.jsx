import React from 'react';

const HABadge = () => {
    return (
        <div className="absolute top-6 left-6 z-10">
            <span className="px-3 py-1.5 text-xs font-semibold text-green-300 bg-green-500/10 rounded-lg border border-green-500/30 backdrop-blur-sm">
                HA
            </span>
        </div>
    );
};

export default HABadge;

