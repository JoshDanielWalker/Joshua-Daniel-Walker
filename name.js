const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const space = " ";
var name = "";

var title = "DevOps Engineer";

if (urlParams.get('name') != null) {
  var name = urlParams.get('name');
  var formatname = space.concat(name);
  document.getElementById("name").innerHTML = formatname;
}

if (urlParams.get('title') != null) {
  var title = urlParams.get('title');
  var formattitle = space.concat(title);
  document.getElementById("header").innerHTML = formattitle;
  document.getElementById("title").innerHTML = formattitle;
} else {
  document.getElementById("header").innerHTML = title;
  document.getElementById("title").innerHTML = title;
}
