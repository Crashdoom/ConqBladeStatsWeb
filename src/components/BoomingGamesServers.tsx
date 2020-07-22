import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { APIStatusResponse } from '../models/APIModel';
import { StatusBlock } from './StatusBlock';
import { boomingGamesServerList } from '../constants/BoomingGames';
import { useInterval } from '../utils';

interface Props {
  onError(err: string): void;
}

export const BoomingGamesServers: React.FunctionComponent<Props> = ({ onError }) => {
  const [serverInfo, setServerInfo] = useState<APIStatusResponse>();

  useInterval(() => {
    axios.request<APIStatusResponse>({ url: 'https://api.conqbladestats.com/status/boominggames' })
      .then(({ data }) => setServerInfo(data))
      .catch(err => onError(`Failed to Retrieve Stats - ${err.toString()}`));
  }, 300 * 1000);

  return (
    <>
      <div className="col-lg-12 mb-4">
        <div className="card">
          <div className="card-header">
            Booming Games Servers <small>(Updates Every 15 Minutes)</small>
          </div>
        </div>
      </div>
      {Object.keys(boomingGamesServerList).map(id =>
        <StatusBlock
          id={id}
          key={id}
          name={boomingGamesServerList[id]}
          serverInfo={serverInfo && serverInfo.servers[id]}
          lastUpdated={serverInfo && serverInfo.last_updated}
        />
      )}
    </>
  );
};