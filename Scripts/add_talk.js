// add a single talke to a list of talks
function add_talk(speaker) {

  returner = "";

  returner += "## "+speaker+"\n"
	returner += "### Summary \n"
	returner += "- \n"
  returner += "### Action Items\n"
	returner += "- \n"

  return returner;

}
module.exports = add_talk;
