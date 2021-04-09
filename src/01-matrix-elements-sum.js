/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  return matrix.reduce((acc, current, index) => {
    if (!matrix[index - 1]) {
      return acc + current.reduce((a, b) => a + b, 0);
    }
    return acc + current.reduce((a, b, i) => {
      if (matrix[index - 1][i] !== 0) {
        return a + b;
      }
      return a;
    }, 0);
  }, 0);
}

module.exports = getMatrixElementsSum;
