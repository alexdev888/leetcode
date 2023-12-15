/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const words = new Map();

  for (let i = 0; i < s.length; i++) {
    const charS = s[i];

    if (words.has(charS)) {
      words.set(charS, words.get(charS) + 1);
    } else {
      words.set(charS, 1);
    }

    const charT = t[i];
    if (words.has(charT)) {
      words.set(charT, words.get(charT) - 1);
    } else {
      words.set(charT, -1);
    }
  }

  for (let item of words.values()) {
    if (item !== 0) {
      return false;
    }
  }

  return true;
};

const result = isAnagram("anagram", "nagaram");
// const result = isAnagram("rat", "car");
console.log(result);
