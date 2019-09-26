
var myVar;
function myLoader() {
  myVar = setTimeout(showPage, 1500);
}

function showPage() {
  document.getElementById("preloader").style.display = "none";
  document.getElementById("webContent").style.display = "block";
}
