//const listItem = (content) => {
// TODO: return the proper <li> HTML tag with its content (as a string)
// <li class="list-group-item">milk</li>
const listItem = (content) => {
  return  "<li class=\"list-group-item\">".concat(content + "</li>");

};
const unorderedList = (items) => {

  // TODO: return the proper <ul> markup (as a string)
  var list= items.map(item => "<li class=\"list-group-item\">".concat(item + "</li>"));
  list=list.join("");
  return "<ul class=\"list-group\">".concat(list + "</ul>");

};

module.exports = { listItem, unorderedList }; // Do not remove.
