window.onload=writeMessage;
function writeNessage(){
	if(document.referrer!=""){
		document.getElementById("referrerMsg").innerHTML="I hope this page is batter than"+document.referrer;
	}
}