import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // template: '<app-server></app-server>',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  username = "";
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
    if (this.username.length > 0) {
      this.username = "";
    }
  }
  ngOnInit() {

  }
  onSetUsername() {
    this.username = (<HTMLInputElement>event.target).value;
  }
  onCreateServer() {
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }
  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
