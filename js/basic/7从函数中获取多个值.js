function getSize(width,height,depth){
	var area=width*height;
	var volume=width*height*depth;
	var sizes=[area,volume];
	return sizes;
}

var areaOne=getSize(3,2,3);
var areaTwo=getSize(4,5,3);