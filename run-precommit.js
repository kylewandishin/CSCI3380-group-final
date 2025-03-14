const path = require('path');
const { exec } = require('child_process');
const { exit } = require('process');

// Build the new directory path relative to the current script (__dirname)
const newDir = path.join(__dirname, 'ProjectSourceCode', 'scripts');

// Change the current working directory of the process
try {
  process.chdir(newDir);
  console.log(`Directory changed to: ${process.cwd()}`);
} catch (err) {
  console.error(`chdir error: ${err}`);
  process.exit(1);
}

// Now run 'node main.js' in the new directory
exec('node pre-commit.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing pre-commit.js: ${error.message}`);
    exit(1); // Exit with error code if there is an error
  }
  if (stderr) {
    console.error(`stderr: ${stderr}`);
    exit(1); // Exit with error code if stderr is not empty
  }
  console.log(`stdout: ${stdout}`);
    console.log('main.js executed successfully.');
});
