import { getData } from "./station13.js";

var result = getData();
var elem = document.getElementById("result");
elem.innerHTML = result;