// build.js
const fs = require('fs');
const path = require('path');
require('dotenv').config();

// Read the HTML file
const htmlPath = path.join(__dirname, 'city-guesser.html');
const outputPath = path.join(__dirname, 'dist', 'city-guesser.html');

// Make sure the dist directory exists
if (!fs.existsSync(path.join(__dirname, 'dist'))) {
  fs.mkdirSync(path.join(__dirname, 'dist'));
}

// Read the template HTML
fs.readFile(htmlPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Replace the placeholder with the actual API key from environment variables
  const result = data.replace(/%REACT_APP_GOOGLE_MAPS_API_KEY%/g, process.env.GOOGLE_MAPS_API_KEY);

  // Write the processed HTML to the output file
  fs.writeFile(outputPath, result, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the file:', err);
      return;
    }
    console.log('Build completed successfully!');
  });
});
