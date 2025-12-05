import React from 'react';
import ClusterDashboard from './components/ClusterDashboard';

function App() {
  const clusterConfig = {
    primary: {
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
    replicas: [
      {
        location: 'AWS us-west-2',
        instanceType: 'M-160',
        showMonitoringIcon: true,
        connections: { current: 3, max: 100 },
        cpu: 0,
        memory: 2,
      },
      {
        location: 'AWS us-west-2',
        instanceType: 'M-160',
        showMonitoringIcon: true,
        connections: { current: 2, max: 100 },
        cpu: 0,
        memory: 2,
      },
    ],
  };

  return (
    <div className="min-h-screen p-8" style={{
      background: 'radial-gradient(ellipse at top, rgba(15, 23, 42, 0.8) 0%, rgba(2, 6, 23, 1) 100%)',
    }}>
      <div className="max-w-7xl mx-auto">
        <ClusterDashboard
          primary={clusterConfig.primary}
          replicas={clusterConfig.replicas}
        />
      </div>
    </div>
  );
}

export default App;
