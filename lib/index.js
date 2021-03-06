// Dependencies
const ucFirst = require("ucfirst");

/**
 * ucFirstArray
 * Uppercase first character of each element in arrays of strings.
 *
 * @name ucFirstArray
 * @function
 * @param {Array} input The input array of strings.
 * @return {Array} An array of strings having first characters uppercase.
 */
function ucFirstArray(input) {
    return input.map(ucFirst);
}

module.exports = ucFirstArray;
