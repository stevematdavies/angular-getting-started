import {Component, Input} from "@angular/core";
import {Server, ServerStatus} from "../types/server";


@Component({
  selector: 'app-server',
  templateUrl: 'server.component.html'
})
export class ServerComponent {

  @Input() server: Server = null

  getServerStatus(): ServerStatus {
    return this.server!.status
  }


  toggleStatus(){
    this.server!.status = this.server!.status === ServerStatus.ONLINE
      ? ServerStatus.OFFLINE
      : ServerStatus.ONLINE;
  }
}
