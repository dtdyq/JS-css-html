window.onload=initALL;
var usedNuns=new Array(76)
function initALL(){
	if(document.getElementById){
		document.getElementById("reload").onclick=anotherCard;
		newCard();
	}
	else{
		alert("Sorry, your browser doesn't support this script!");
	}
}
function newCard(){
	for(var i=0;i<24;i++){
		setSquare(i);
	}
}
function setSquare(thisSquare){
	var currSquare="square"+thisSquare;
	var colPlace=new Array(0,1,2,3,4,0,1,2,3,4,0,1,3,4,0,1,2,3,4,0,1,2,3,4);
	var colBasis=colPlace[thisSquare]*15;
	var newNum;

	do{
		newNum=colBasis+getNewNum()+1;
	}while(usedNuns[newNum]);
	usedNuns[newNum]=true;
	document.getElementById(currSquare).innerHTML=newNum;
}
function getNewNum(){
	return Math.floor(Math.random()*15);
}
function anotherCard(){
	for(var i=1;i<usedNuns.length;i++)
	{
		usedNuns[i]=false;
	}
	newCard();
	return false;
}