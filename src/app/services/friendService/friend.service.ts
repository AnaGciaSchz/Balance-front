import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Friend } from '../../model/Friend';

@Injectable({
  providedIn: 'root'
})
export class FriendService {

  private url = 'http://localhost:8080/api/v1/friends';

  constructor(private http: HttpClient) { }

  getPayMap(): Observable<string[]> {
    return this.http.get<string[]>(this.url+'/payMap');
  }

  getFriends(): Observable<Friend[]> {
    return this.http.get<any[]>(this.url)
      .pipe(
        map((friends: any[]) => friends.map((friend: any) => ({
          id: friend.id,
          name: friend.name,
          balanceDebt: friend.balanceDebt
        } as Friend)))
      ) 
  }

  registerFriend(friend: Friend): Observable<Friend> {
    const httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };
    return this.http.post<Friend>(this.url, friend, httpOptions);
  }
}
