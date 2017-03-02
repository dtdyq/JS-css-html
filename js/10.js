window.onload=rolloverInit;

function rolloverInit(){
	for(vari=0;i<document.images.length;i++){
		if(document.images[i].parentNode.tagName="A"){
			setupRollover(document.images[i]);
		}
	}
}

function.setupRollover(thisImage){
	thisImage.outImage=new Image();
	thisImage.outImage.src=thisImage.src;
	thisImage.onmouseout=rollOut;

	thisImage.overImage= new Image();
	thisImage.overImage.src="images/"+thisImage.id+".jpg";
	thisImage.onmouseover=rollOver; 
}

function rollOver(){
	this.src=this.overImage.src;
}

function rollOut(){
	this.src=this.outImage.src;
}