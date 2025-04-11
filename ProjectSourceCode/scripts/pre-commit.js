#!/usr/bin/env node
const { execSync } = require('child_process');

try {
  // Run your precommit npm script
  execSync('npm run precommit', { stdio: 'inherit' });

  // Refresh the git index
  execSync('git update-index --again', { stdio: 'inherit' });

  // Run tests and build commands
  execSync('npm run test:unit', { stdio: 'inherit' });
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error(error);
  process.exit(1);
}
