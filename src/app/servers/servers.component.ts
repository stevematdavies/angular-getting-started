import {Component} from '@angular/core';
import {Server, ServerStatus} from "../types/server";
import { v4 as uuid } from 'uuid';

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
      { id: uuid(), status: ServerStatus.OFFLINE },
      { id: uuid(), status: ServerStatus.ONLINE },
    ]
  }

  onServerDelete(serverId: string){
    this.servers = this.servers.filter((s) => s!.id !== serverId).sort();
  }

  onCreateServer(){
    if (!this.allowNewServers){
      return;
    }
    this.serverCreationStatus = 'Server was created!'
    this.servers = [...this.servers, { id:uuid(), status: ServerStatus.OFFLINE}]

    setTimeout(() => {
      this.serverCreationStatus = 'Waiting for new server to be created';
    }, 3000);
  }

}
