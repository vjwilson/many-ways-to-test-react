import React, {PropTypes} from 'react';

const Header = ({ login, logout, user }) => {
  let authLink = login;
  let authLinkText = 'Login';
  let authMessage = 'Have an account?';
  if (user && user.username) {
    authLink = logout;
    authLinkText = 'Logout';
    authMessage = 'Welcome, ' + user.username;
  }

  return (
    <nav className="navbar navbar-default">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand" href="#">Dogs: The Musical</a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav">
            <li><a href="#">The Story</a></li>
            <li><a href="#">Cast</a></li>
            <li><a href="#">Director</a></li>
            <li><a href="#">Venue</a></li>
          </ul>
          <form className="navbar-form navbar-right">
            <div className="form-group">
              <input type="text" className="form-control" placeholder="Search" />
            </div>
            <button type="submit" className="btn btn-default">Go</button>
          </form>
          <ul className="nav navbar-nav navbar-right login-block">
            <li className="navbar-text">{authMessage}</li>
            <li><a href="#" className="navbar-link" onClick={authLink}>{authLinkText}</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  login: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  user: PropTypes.object
};

export default Header;
