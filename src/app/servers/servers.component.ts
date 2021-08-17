import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No Server was created';
  serverName: string = 'Test server here';
  serverCreated: boolean = false;
  serversArray = ['TestServer', 'TestServer2'];

  constructor() {
    setTimeout(() => {
      console.log('enabling new servers');

      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serversArray.push(this.serverName);
    this.serverCreated = true;
    this.serverCreationStatus = 'Server Created! name is ' + this.serverName;
  }

  onUpdateServerName(event) {
    console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
