import { Component } from '@angular/core';
import { FriendService } from 'src/app/services/friendService/friend.service';

@Component({
  selector: 'pay-map',
  templateUrl: './pay-map.component.html',
  styleUrls: ['./pay-map.component.css']
})
export class PayMapComponent {
  values: string[] = [];

  constructor(private friendService: FriendService) {}

  refreshPayMap() {
    this.friendService.getPayMap().subscribe(
      (values: string[]) => {
        this.values = values;
      }
    );
  }   

  ngOnInit() {
    this.refreshPayMap();
  }

}
