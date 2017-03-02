function Hotel(name,rooms,booked){
	this.name=name;
	this.rooms=rooms;
	this.booked=booked;
	this.checkAva=function(){
		return this.rooms-this.booked;
	};
}


var Quayhotel=new Hotel('Quay',40,25);
var Parkhotel=new Hotel('Park',120,75);