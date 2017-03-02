window.onload=initALL;
function initALL(){
	for(var i=0;i<document.forms[0].elements.length;i++){
		var thisElement=document.forms[0].elements[i];

		if(thisElement.type=="button"){
			thisElement.onclick=saySomething;
		}
	}
}

function saySomething(){
	switch(this.value){
		case "Lincoln":
		alert("Four score and seven years ago...");
		break;
		case "Kennedy":
		alert("Ask not what your country can do for you...");
		break;
		case "Nixon":
		alert("I am not a crook!");
		break;
		default:
	}
}