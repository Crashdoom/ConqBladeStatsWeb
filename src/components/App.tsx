import React, { useState } from 'react';
import { NavBar } from './NavBar';
import { MyGamesServers } from './MyGamesServers';
import { BoomingGamesServers } from './BoomingGamesServers';

export const App: React.FunctionComponent = () => {
  const [errorMessage, setErrorMessage] = useState<string | undefined>();
  return (
    <>
      <NavBar errorMessage={errorMessage} />
      <div className="container mt-4">
        <div className="alert alert-info" role="alert">
          This is an unofficial fan website that is not affiliated with My.Games or Booming Games.
        </div>

        <div className="row text-center">
          <MyGamesServers onError={setErrorMessage} />
          <div className='col-lg-12'><hr /></div>
          <BoomingGamesServers onError={setErrorMessage} />
        </div>
      </div>
    </>
  );
}