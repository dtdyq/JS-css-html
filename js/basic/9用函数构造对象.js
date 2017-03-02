var hotel=new object();
hotel.name='Quay';
hotel.rooms=40;
hotel.booked=25;
hotel.checkAva=function(){
	return this.rooms-this.booked;
};
//修改对象
hotel.name='Park';
//或者：
hotel['name']='Park';