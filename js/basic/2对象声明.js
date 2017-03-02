var hotel={
	name:'Quay',
	rooms:'40',
	booked:'20',
	gym:'true';
	roomtype:['twin','double','suite'],
	checkAva:function(){
		return this.rooms-this.booked;
	}
}

var hotelName=hotel.name;
//var hotelName=hotel['name'];