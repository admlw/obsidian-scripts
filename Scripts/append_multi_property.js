// add a list of a property to the properties table
function append_multi_property (frontmatter, key, values) {
	for (let i = 0; i < values.length; i++){
	    if (key in frontmatter && !frontmatter[key].contains(values[i])){
			frontmatter[key].push(values[i]);
		}
		else{
		  frontmatter[key] = [values[i]];
		}
	}

}
module.exports = append_multi_property;
