import { Component, OnInit } from '@angular/core';
import {AngularFireDatabase} from 'angularfire2/database';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: any[];
  constructor( private db: AngularFireDatabase) {
  }

  ngOnInit() {
   this.db.list('/')
    .valueChanges()
    .subscribe(users=>{
      this.users = users;
      console.log(users);
    })
  }

}
