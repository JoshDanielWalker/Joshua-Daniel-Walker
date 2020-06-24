const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const space = " ";
var name = "";

if (urlParams.get('name') != null) {
  var name = urlParams.get('name');
  var formatname = space.concat(name);
  document.getElementById("name").innerHTML = formatname;
}
