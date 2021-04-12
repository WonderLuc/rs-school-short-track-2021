/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dict = {};
  domains.forEach((el) => {
    const arr = el.split('.').reverse();
    let key = '';
    for (let i = 0; i < arr.length; i++) {
      key += `.${arr[i]}`;
      dict[key] = !dict[key] ? 1 : dict[key] + 1;
    }
  });
  return dict;
}

module.exports = getDNSStats;
