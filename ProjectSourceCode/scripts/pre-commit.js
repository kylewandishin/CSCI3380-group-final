#!/usr/bin/env node
const { execSync } = require('child_process');

try {
  // Run your precommit npm script
  execSync('npm run precommit', { stdio: 'inherit' });

  // Check if .eslintcache is present in the git diff
  const diffOutput = execSync('git diff --name-only').toString();
  if (diffOutput.split('\n').some((line) => line.trim() === '.eslintcache')) {
    console.log('.eslintcache changed. Staging it...');
    execSync('git add .eslintcache', { stdio: 'inherit' });
  }

  // Refresh the git index
  execSync('git update-index --again', { stdio: 'inherit' });

  // Run tests and build commands
  execSync('npm run test', { stdio: 'inherit' });
  execSync('npm run build', { stdio: 'inherit' });
} catch (error) {
  console.error(error);
  process.exit(1);
}
