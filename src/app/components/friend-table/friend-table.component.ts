import { Component } from '@angular/core';
import { Friend } from '../../model/Friend';
import { FriendService } from '../../services/friendService/friend.service';


@Component({
  selector: 'friend-table',
  templateUrl: './friend-table.component.html',
  styleUrls: ['./friend-table.component.css']
})
export class FriendTableComponent {
  friends: Friend[] = [];

  constructor(private friendService: FriendService) {}

  refreshFriends() {
    this.friendService.getFriends().subscribe((friends: Friend[]) => {
      this.friends = friends;
    });
  }    

ngOnInit() {
  this.refreshFriends()
  }
}
