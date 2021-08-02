import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was created';
  serverName: string = ''

  constructor() {
    setTimeout(() => {
      console.log('enabling new servers');

      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreationStatus = 'Server Created!';
  }

  onUpdateServerName(event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
