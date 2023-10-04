const fs = require('fs');

// Read the JSON file
const jsonData = fs.readFileSync('data.json', 'utf8');

try {
    // Parse the JSON data into an array
    const dataArray = JSON.parse(jsonData);

    // Import the ucFirstArray function
    const ucFirstArray = require('./your-module-file'); // Replace with the correct path to your module

    // Uppercase the first character of each element in the array
    const resultArray = ucFirstArray(dataArray);

    // Log the result
    console.log(resultArray);
} catch (error) {
    console.error('Error parsing JSON:', error);
}
