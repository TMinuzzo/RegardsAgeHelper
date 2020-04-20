const dictObj = require("../dictObject.js");
const utils = require("../utils");

function matchMeaning(args) {
  let arg = utils.normalizeString(args);

  if (dictObj[arg]) {
    let argTitle = "**" + arg + "** \n";
    let content  = dictObj[arg];
    // If the dictionary returns an object, append the title only to the text attribute,
    content.text ? content.text = argTitle + content.text : content = argTitle + content; 
    return content;
  } else {
    return utils.didYouMean(arg, dictObj);
  }
}

module.exports = matchMeaning;
