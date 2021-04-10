/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  // isModifed set to true for first-time check
  const resultArr = arr;
  let isModifed = true;
  while (isModifed) {
    isModifed = false;
    for (let i = 0, currentOffset = 1; i < resultArr.length; i++) {
      if (resultArr[i] !== -1) {
        while (resultArr[currentOffset] === -1) {
          currentOffset++;
        }
        if (resultArr[i] > resultArr[currentOffset]) {
          const temp = resultArr[i];
          resultArr[i] = resultArr[currentOffset];
          resultArr[currentOffset] = temp;
          isModifed = true;
        }
      }
      currentOffset = i + 2;
    }
  }
  return resultArr;
}

module.exports = sortByHeight;
