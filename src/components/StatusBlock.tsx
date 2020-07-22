import React from 'react';
import { Server } from '../models/ServerModel';
import { StatusDiff } from './StatusDiff';
import { classNames, getTimeAgoText } from '../utils';

interface Props {
  id: string;
  name: string;
  lastUpdated?: number;
  serverInfo?: Server;
}

export const StatusBlock: React.FunctionComponent<Props> = ({ name, id, serverInfo, lastUpdated }) => {
  const isOnline = serverInfo ? (serverInfo.online || (serverInfo.data && serverInfo.data.current_user_count > 0)) : false;
  return (
    <div id={id} className="col-lg-4 mb-2">
      <div className="card">
        <div className="card-body">
          <p className={classNames({
            'text-secondary': !serverInfo,
            'text-success': serverInfo && isOnline,
            'text-danger': serverInfo && !isOnline,
          }, 'server-status card-text')}>
            {!serverInfo ? <strong>Checking Status...</strong> : (
              isOnline ? <strong>ONLINE <StatusDiff diff={serverInfo.data?.diff} /></strong> : <strong>Offline</strong>
            )}
          </p>
          {(serverInfo && isOnline) && (
            <h4 className="player-count">
              {serverInfo.data?.current_user_count} <small>/ {serverInfo.data?.max_user_count}</small>
            </h4>
          )}
          <h5 className="card-title">{name}</h5>
          {lastUpdated && (
            <p className="card-text">
              <small className="last-updated">{getTimeAgoText(lastUpdated)}</small>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};