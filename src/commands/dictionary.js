const dictObj = require("../dictObject.js");
const utils = require("../utils");

function matchMeaning(args) {
  let arg = utils.normalizeString(args);

  if (dictObj[arg]) {
    return dictObj[arg];
  } else {
    return utils.didYouMean(arg, dictObj);
  }
}

module.exports = matchMeaning;
