# Database Cluster Hierarchy Chart

A React application built with Tailwind CSS to visualize database cluster hierarchies.

## Features

- Visual representation of database cluster architecture
- Primary and replica node visualization
- Reusable components for maintainability
- Clean, modern UI with Tailwind CSS

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build

```bash
npm run build
```

## Project Structure

```
src/
  components/
    NodeCard.jsx        # Reusable node component
    ClusterDashboard.jsx  # Main cluster dashboard component
  App.jsx              # Main application component
  main.jsx             # Application entry point
  index.css            # Global styles with Tailwind
```

## Components

### NodeCard

A reusable component for displaying database nodes (Primary or Replica).

**Props:**
- `type` (string): Node type - 'primary' or 'replica'
- `location` (string): Location/region of the node
- `instanceType` (string): Instance type identifier
- `showMonitoringIcon` (boolean): Whether to show monitoring icon

### ClusterDashboard

Main component that displays the cluster hierarchy with connections.

**Props:**
- `primary` (object): Primary node configuration
- `replicas` (array): Array of replica node configurations

## Usage Example

```jsx
<ClusterDashboard
  primary={{
    location: 'AWS us-west-2',
    instanceType: 'M-160',
    showMonitoringIcon: true,
  }}
  replicas={[
    { location: 'AWS us-west-2', instanceType: 'M-160', showMonitoringIcon: true },
    { location: 'AWS us-west-2', instanceType: 'M-160', showMonitoringIcon: true },
  ]}
/>
```

