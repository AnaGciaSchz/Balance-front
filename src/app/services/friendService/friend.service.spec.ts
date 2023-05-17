import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FriendService } from './friend.service';
import { Friend } from '../../model/Friend';

describe('FriendService', () => {
  let service: FriendService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [FriendService]
    });
    service = TestBed.inject(FriendService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve the pay map', () => {
    const expectedPayMap = 'some pay map';
    
    service.getPayMap().subscribe((payMap: string) => {
      expect(payMap).toEqual(expectedPayMap);
    });
    
    const req = httpMock.expectOne('http://localhost:8080/api/v1/friends/payMap');
    expect(req.request.method).toBe('GET');
    req.flush(expectedPayMap);
  });

  it('should retrieve friends', () => {
    const mockFriends = [
      { id: '1', name: 'Friend 1', balanceDebt: 10 },
      { id: '2', name: 'Friend 2', balanceDebt: -5 }
    ];
    const expectedFriends: Friend[] = [
      { id: '1', name: 'Friend 1', balanceDebt: 10 },
      { id: '2', name: 'Friend 2', balanceDebt: -5 }
    ];

    service.getFriends().subscribe((friends: Friend[]) => {
      expect(friends).toEqual(expectedFriends);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/v1/friends');
    expect(req.request.method).toBe('GET');
    req.flush(mockFriends);
  });

  it('should register a friend', () => {
    const newFriend: Friend = { id: '3', name: 'Friend 3', balanceDebt: 0 };
    const expectedFriend: Friend = { id: '3', name: 'Friend 3', balanceDebt: 0 };

    service.registerFriend(newFriend).subscribe((friend: Friend) => {
      expect(friend).toEqual(expectedFriend);
    });

    const req = httpMock.expectOne('http://localhost:8080/api/v1/friends');
    expect(req.request.method).toBe('POST');
    expect(req.request.body).toEqual(newFriend);
    req.flush(expectedFriend);
  });
});
