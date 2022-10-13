export enum ServerStatus { ONLINE ="ONLINE", OFFLINE="OFFLINE"}

export interface iServer {
  id: number,
  status: ServerStatus
}

export type Server = iServer | null
