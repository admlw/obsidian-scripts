// add a list of recent talks
function list_recent_talks(experiment, group, speaker) {

  returner = "";

  returner += "Talks from "+speaker+"\n" 
  returner += "```dataview\n"
  returner += "LIST\n"
  returner += "from \""+experiment+"/"+group+"/Meetings\"\n"
  returner += "WHERE contains(speakers, \""+speaker+"\")\n"
  returner += "SORT file.name DESC\n"
  returner += "```\n\n"

  return returner;

}
module.exports = list_recent_talks;
