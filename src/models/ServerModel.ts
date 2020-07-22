export interface Server {
  ip: string;
  online: boolean;
  code: number;
  data: {
    current_user_count: number;
    diff: number;
    max_user_count: number;
    recommend_status: number;
    is_recommend_status: boolean;
    server_status_frame: number;
  };
  msg: string;
}

export interface ServerList {
  [key: string]: Server;
}