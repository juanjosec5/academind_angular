import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.scss']
})
export class UsernameComponent implements OnInit {
  username: string = '';
  isDisabled: boolean;
  constructor() { }

  ngOnInit(): void {
  }

  resetUsername() {
    if(this.username){
      this.username = '';
      console.log('username deleted');
    } 
  }
}
