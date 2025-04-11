#!/usr/bin/env node
const { execSync } = require('child_process');

try {
  // Run your precommit npm script
  execSync('npm run precommit', { stdio: 'inherit' });
  console.log('Pre-commit script executed successfully.');

  // Refresh the git index
  execSync('git update-index --again', { stdio: 'inherit' });
  console.log('Git index refreshed.');

  // Run tests and build commands
  execSync('npm run test:unit', { stdio: 'inherit' });
  console.log('Unit tests passed.');
  execSync('npm run build', { stdio: 'inherit' });
  console.log('Build completed successfully.');
  console.log('Pre-commit checks passed. Proceeding with commit.');
} catch (error) {
  console.error(error);
  process.exit(1);
}
