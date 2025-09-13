<%*
possible_experiments=["NOvA", "DUNE", "SBN"]

nova_meetings = ["3F", "DetSysts", "NuX", "TestBeam"]
dune_meetings = ["APA", "Calibration", "BSM"]
sbn_meetings  = ["G4BNB"]

speakers   = await tp.system.prompt("List speakers");
experiment = await tp.system.suggester((item) => item, possible_experiments)

meeting = ""
console.log(experiment)
if (experiment == "NOvA"){
	meeting    = await tp.system.suggester((item) => item, nova_meetings)
}
else if (experiment == "DUNE"){
	meeting    = await tp.system.suggester((item) => item, dune_meetings)
}
else if (experiment == "SBN"){
	meting = await tp.system.suggester((item) => item, sbn_meetings)
}

speakers_fmt  = speakers.replaceAll(", ", ",")
splits        = speakers_fmt.split(",") 

tR += "# "+tp.date.now("YYYY-MM-DD")+" "+meeting+"\n"

tR += "## General Notes\n"
tR += "- \n"

for (let i = 0; i < splits.length; i++){
	tR += tp.user.add_talk(splits[i]);
}

tR += "\n---\n"

setTimeout(() => {
app.fileManager.processFrontMatter(tp.config.target_file, frontmatter => {
	tp.user.append_single_property(frontmatter, "tags", meeting)
	tp.user.append_multi_property(frontmatter, "speakers", splits)
}) 
}, 4000)

path=experiment+"/"+meeting+"/Meetings/"+tp.date.now("YYYY-MM-DD")
console.log("Moving to "+path)
tp.file.move(path)
%>