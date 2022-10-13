import {Component} from '@angular/core';
import {Server, ServerStatus} from "../types/server";

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent  {
  allowNewServers: boolean = false;
  serverCreationStatus: string = 'Waiting for new server to be created';
  servers: Server[] = [];


  constructor() {
    setTimeout(() =>{
      this.allowNewServers = true;
    },3000)

    this.servers = [
      { id: 1, status: ServerStatus.OFFLINE },
      { id: 2, status: ServerStatus.ONLINE },
    ]
  }

  onCreateServer(){
    if (!this.allowNewServers){
      return;
    }
    this.serverCreationStatus = 'Server was created!'
    this.servers = [...this.servers, { id: this.servers.length + 1, status: ServerStatus.OFFLINE}]

    setTimeout(() => {
      this.serverCreationStatus = 'Waiting for new server to be created';
    }, 3000);
  }

}
