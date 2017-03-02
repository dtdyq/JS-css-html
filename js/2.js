window.onload=initALL;
function initALL(){
	document.getElementById("redirect").onlick=initRedirect;

}
function initRedirect(){
	alert("We are not");
	window.location=this;
	return false;
}