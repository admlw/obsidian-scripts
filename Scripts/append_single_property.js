// add a single property to the properties table
function append_single_property (frontmatter, key, value) {

  if (key in frontmatter && !frontmatter[key].contains(value)){
    frontmatter[key].push(value);
  }
  else {
    frontmatter[key] = [value];
  }	

}
module.exports = append_single_property;
