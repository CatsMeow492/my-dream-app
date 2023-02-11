import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['../../../node_modules/bootstrap/dist/css/bootstrap.min.css']
})

export class ServerComponent {
  serverId: number = 10;
  serverStatus: string ='offline';

  getServerStatus(){
    return this.serverStatus;
  }
}
