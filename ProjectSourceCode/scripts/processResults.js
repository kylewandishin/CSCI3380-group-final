// processResults.js
const fs = require('fs');

fs.readFile('results.json', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading results.json:', err);
    process.exit(1);
  }

  let report;
  try {
    data = data.substring(data.indexOf('{'));
    report = JSON.parse(data);
  } catch (parseErr) {
    console.error('Error parsing JSON:', parseErr);
    process.exit(1);
  }

  // Check if there are any failures
  if (report.failures && report.failures.length > 0) {
    console.log('Failing Tests:');
    report.failures.forEach((failure) => {
      console.log(`- ${failure.fullTitle}`);
      if (failure.err && failure.err.message) {
        console.log(`  Error: ${failure.err.message}`);
      }
    });
    // Exit with non-zero code to indicate failure
    process.exit(1);
  } else if (report.passes && report.passes.length > 0) {
    console.log('All tests passed. Passing Tests:');
    report.passes.forEach((pass) => {
      console.log(`- ${pass.fullTitle}`);
    });
    process.exit(0);
  } else {
    console.log('No tests found or something went wrong.');
    process.exit(1);
  }
});
