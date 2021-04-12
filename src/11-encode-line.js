/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let current;
  let count = 1;
  let result = '';
  str.split('').map((el, index, arr) => {
    if (!current) {
      current = el;
      return el;
    }
    if (current === el) {
      count++;
    }
    if (current !== el && (index + 1) === arr.length) {
      result += `${count > 1 ? count : ''}${arr[index - 1]}`;
      current = el;
      count = 1;
      result += `${count > 1 ? count : ''}${arr[index]}`;
      return el;
    }
    if (current !== el || (index + 1) === arr.length) {
      result += `${count > 1 ? count : ''}${arr[index - 1]}`;
      current = el;
      count = 1;
    }
    return el;
  });
  return result;
}

module.exports = encodeLine;
