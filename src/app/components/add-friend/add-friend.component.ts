import { Component} from '@angular/core';
import { Friend } from 'src/app/model/Friend';
import { FriendService } from 'src/app/services/friendService/friend.service';

@Component({
  selector: 'add-friend',
  templateUrl: './add-friend.component.html',
  styleUrls: ['./add-friend.component.css']
})
export class AddFriendComponent {
  constructor(private friendService: FriendService) {}

  friend: Friend = {
    id: "0",
    name:"",
    balanceDebt: 0.0
  };

  saveFriend() {
    this.friendService.registerFriend(this.friend).subscribe(
      (response) => {
        console.log('Response Body:', response);
      },
      (error) => {

        alert('Invalid friend information, check again')
      }
    );
  }

}
