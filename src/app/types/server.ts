export enum ServerStatus { ONLINE ="ONLINE", OFFLINE="OFFLINE"}


export interface iServer {
  id: string
  status: ServerStatus
}

export type Server = iServer | null
