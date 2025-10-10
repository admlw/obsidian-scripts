<%*
possible_experiments=["NOvA"]
nova_checkins = ["Steriles", "NSI", "NuX Convener"]

experiment = await tp.system.suggester((item) => item, possible_experiments)

checkin = ""
dir = ""
console.log(experiment)
if (experiment == "NOvA"){
	checkin    = await tp.system.suggester((item) => item, nova_checkins)
    if (checkin == "Steriles"){
        dir = "NOvA/NuX/Check-Ins/Steriles"
    }
    if (checkin == "NSI"){
        dir = "NOvA/NuX/Check-Ins/NSI"
    }
    if (checkin == "NuX Convener"){
        dir = "NOvA/NuX/Check-Ins/Convener"
    }
}

tR += "# "+tp.date.now("YYYY-MM-DD")+" "+checkin+" Check-in\n"

tR += "## General Notes\n"
tR += "- \n"

setTimeout(() => {
app.fileManager.processFrontMatter(tp.config.target_file, frontmatter => {
	tp.user.append_single_property(frontmatter, "tags", checkin)
}) 
}, 4000)

path=dir+"/"+tp.date.now("YYYY-MM-DD")
console.log("Moving to "+path)
tp.file.move(path)

%>
