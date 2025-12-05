import React from 'react';

const NodeHeader = ({ type, location, showMonitoringIcon }) => {
    const isPrimary = type === 'primary';

    return (
        <div className="relative flex items-center gap-3 p-5 pb-3 border-b border-gray-700/40">
            <div className="flex items-center justify-center flex-shrink-0 w-10 h-10 rounded-full border-2 bg-green-500/20 border-green-500/50">
                <svg
                    className="w-5 h-5 text-green-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                </svg>
            </div>

            <div className="flex-1 flex flex-col">
                <span className="text-base font-semibold text-white">
                    {isPrimary ? 'Primary' : 'Replica'}
                </span>
                {location && (
                    <span className="text-sm text-gray-300 font-medium mt-0.5">
                        {location}
                    </span>
                )}
            </div>

            {showMonitoringIcon && (
                <div className="flex-shrink-0">
                    <svg
                        className="w-5 h-5 text-white/70"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
};

export default NodeHeader;

