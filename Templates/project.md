<%*
possible_experiments=["NOvA", "DUNE", "SBN"]

nova_groups = ["3F", "DetSysts", "NuX", "TestBeam"]
dune_groups = ["APA", "Calibration", "BSM"]
sbn_groups  = ["G4BNB"]

experiment = await tp.system.suggester((item) => item, possible_experiments)

group = ""
console.log(experiment)
if (experiment == "NOvA"){
	group = await tp.system.suggester((item) => item, nova_groups)
}
else if (experiment == "DUNE"){
	group = await tp.system.suggester((item) => item, dune_groups)
}
else if (experiment == "SBN"){
	group = await tp.system.suggester((item) => item, sbn_groups)
}

project   = await tp.system.prompt("Project Name");
analysers = await tp.system.prompt("List Analysers");

analysers_fmt  = analysers.replaceAll(", ", ",")
splits         = analysers_fmt.split(",") 

tR += "# "+project+"\n\n"

tR += "## General Notes\n\n"

tR += "## Last Updates\n\n"

for (let i = 0; i < splits.length; i++){
	tR += tp.user.list_recent_talks(experiment, group, splits[i]);
}

tR += "\n---\n"

setTimeout(() => {
app.fileManager.processFrontMatter(tp.config.target_file, frontmatter => {
	tp.user.append_single_property(frontmatter, "cssclasses", "dashboard")
	tp.user.append_single_property(frontmatter, "tags", group)
	tp.user.append_single_property(frontmatter, "tags", "overview")
	tp.user.append_multi_property(frontmatter, "analysers", splits)
}) 
}, 4000)

path=experiment+"/"+group+"/Projects/"+project+"/"+project+" Overview"
console.log("Moving to "+path)
tp.file.move(path)
%>
