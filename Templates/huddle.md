<%*

huddle_type = await tp.system.prompt("Which Huddle?");

tR += "# "+tp.date.now("YYYY-MM-DD") + " " + huddle_type + " Huddle \n"

tR += "## General Notes\n"
tR += "- \n"

tR += "## Action Items\n"
tR += "- \n"

tR += "\n---\n"

// append properties to frontmatter
setTimeout(() => {
	app.fileManager.processFrontMatter(tp.config.target_file, frontmatter => {
		tp.user.append_single_property(frontmatter, "huddle", huddle_type)
	})
}, 4000)

%>
