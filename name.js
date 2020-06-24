const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const name = urlParams.get('name');
const space = " ";
var formatname = space.concat(name);

document.getElementById("name").innerHTML = formatname;
