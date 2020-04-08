const levenshtein = require("js-levenshtein");
const unorm = require("unorm");

function didYouMean(arg, dictObj) {
  let smallerDistance = 1000;
  let result;
  Object.keys(dictObj).forEach((key) => {
    let dist = levenshtein(arg, key);
    if (dist < smallerDistance) {
      result = [key];
      smallerDistance = dist;
    } else if (dist === smallerDistance) {
      result.push(key);
    }
  });
  return "Você quis dizer " + result.join(" ou ") + "?";
}

function normalizeString(args) {
  let arg = args.join("_").toUpperCase();
  return normalizeWord(arg);
}

function normalizeWord(arg) {
  let combining = /[\u0300-\u036F]/g;
  arg = unorm.nfd(arg).replace(combining, "");
  return arg;
}

module.exports = {
  didYouMean,
  normalizeString,
  normalizeWord,
};
