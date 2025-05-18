import * as migration_20250518_083700 from './20250518_083700';

export const migrations = [
  {
    up: migration_20250518_083700.up,
    down: migration_20250518_083700.down,
    name: '20250518_083700'
  },
];
