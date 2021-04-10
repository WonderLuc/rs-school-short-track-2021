/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  return matrix.map((arr, arrIndex) => {
    const line = arr.map((el, index) => {
      // Split env to three varible
      let linePrev = [];
      let lineCurr = [];
      let lineNext = [];
      if (matrix[arrIndex - 1]) {
        linePrev = [matrix[arrIndex - 1][index - 1],
          matrix[arrIndex - 1][index],
          matrix[arrIndex - 1][index + 1]];
      }
      if (matrix[arrIndex + 1]) {
        lineNext = [matrix[arrIndex + 1][index - 1],
          matrix[arrIndex + 1][index], matrix[arrIndex + 1][index + 1]];
      }
      lineCurr = [arr[index - 1], arr[index + 1]];
      const enviroment = [...linePrev, ...lineCurr, ...lineNext];
      return enviroment.filter((mine) => mine === true).length;
    });
    return line;
  });
}

module.exports = minesweeper;
