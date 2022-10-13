import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Server, ServerStatus} from "../types/server";


@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html'
})
export class ServerComponent {

  @Output() onServerDelete: EventEmitter<string> = new EventEmitter<string>();
  @Input() server: Server = null

  getServerStatus(): ServerStatus {
    return this.server!.status
  }

  onDelete(serverId: string){
    this.onServerDelete.emit(serverId)
  }


  toggleStatus(){
    this.server!.status = this.server!.status === ServerStatus.ONLINE
      ? ServerStatus.OFFLINE
      : ServerStatus.ONLINE;
  }
}
