/**
 * ucFirstArray
 * Uppercase first character of each element in arrays of strings.
 *
 * @name ucFirstArray
 * @function
 * @param {Array} input The input array of strings.
 * @return {Array} An array of strings having first characters uppercase.
 */
export default input => {
    if (!Array.isArray(input)) {
        throw new TypeError(`Expected an array, got ${typeof input}`);
    }

    return input.map(ucFirst);
}

/**
 * ucFirst
 * Uppercase first character of a string.
 * 
 * @param {String} word The input string.
 * @returns {String} The input string with the first character uppercased.
 */
export const ucFirst = word => word.charAt(0).toUpperCase() + word.slice(1);
