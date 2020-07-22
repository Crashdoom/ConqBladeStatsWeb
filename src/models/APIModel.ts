import { ServerList } from "./ServerModel";

export interface APIStatusResponse {
  last_updated: number;
  servers: ServerList;
}