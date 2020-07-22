import React from 'react';

interface Props {
  errorMessage?: string;
}

export const NavBar: React.FunctionComponent<Props> = ({ errorMessage }) => (
  <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">Conqueror's Blade Status</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Historical Data (Coming Soon)</a>
          </li>
        </ul>
      </div>
    </nav>
    {errorMessage && (
      <div className="alert alert-danger" style={{ borderRadius: 0 }} role="alert">
        <strong>ERROR</strong> {errorMessage}
      </div>
    )}
  </>
);