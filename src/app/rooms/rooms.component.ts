import { Component, OnInit } from '@angular/core';
import { Room } from "./rooms";
import { RoomList } from "./rooms";
@Component({
  selector: 'hinv-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {

  hotelName = 'Taj Hotel';
  numberOfRooms = 10;
  hideRooms = false;
  rooms : Room = {
    totalRooms: 20,
    availableRooms: 10,
    bookedRooms: 5
  };
  roomList : RoomList[] = [{

    roomType:'Delux',
    amenities:'AC',
    price:500,
    photos:'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg',
    checkinTime: new Date('12-JUNE-2023'),
    checkoutTime: new Date('13-JUNE-2023')
    
  },
  {

    roomType:'Private',
    amenities:'AC,Shower',
    price:1500,
    photos:'https://static01.nyt.com/images/2019/03/24/travel/24trending-shophotels1/24trending-shophotels1-superJumbo.jpg',
    checkinTime: new Date('2-JUNE-2023'),
    checkoutTime: new Date('3-JUNE-2023')
    
  }
];

  
  constructor(){}

  ngOnInit(): void {}
  toggle(){
    this.hideRooms =! this.hideRooms;
  }

}
