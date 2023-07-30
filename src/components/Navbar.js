import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar(props) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary px-2" data-bs-theme={`${props.mode}`}>
<div className="container-fluid">
<span className="navbar-brand mb-0 h1">{props.title}</span>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/home">{props.home}</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/News">Esports</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link" to="/Games">Games</Link>
        </li> 
        <li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/about">{props.about}</Link>
        </li>
      </ul>
      <ul className="navbar-nav mb-4 mb-lg-0">
        <div className="btn-group">
  <button type="button" className="btn btn-danger btn-sm visually-hidden">Action</button>
  <button type="button" className="btn btn-danger btn-sm dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="true">
  <span className="d-lg-none ms-2" id={`bd-theme-text-${props.mode==='light'?'dark':'light'}`}>Toggle theme</span>
  </button>
  <ul className="dropdown-menu">
    <li><div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input mb-2 mb-lg-0" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label mb-2 mb-lg-0" htmlFor="flexSwitchCheckDefault">Change Theme</label>
      </div></li>
    <li><li className="nav-item">
        <Link className="nav-link" aria-current="page" to="/Login">Login</Link>
        </li>
        </li>
  </ul>
  </div>
      
      </ul>
      {/* <li className="nav-item dropdown">
            <button className="btn btn-link nav-link py-2 px-0 px-lg-2 dropdown-toggle d-flex align-items-center show" id="bd-theme" type="button" aria-expanded="true" data-bs-toggle="dropdown" data-bs-display="static">
              <span className="d-lg-none ms-2" id={`bd-theme-text-${props.mode==='light'?'dark':'light'}`}>Toggle theme</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-end show" aria-labelledby={`bd-theme-text-${props.mode==='light'?'dark':'light'}`} data-bs-popper="static">
            <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input mb-2 mb-lg-0" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label mb-2 mb-lg-0" htmlFor="flexSwitchCheckDefault">Change Theme</label>
      </div>
            </ul>
          </li> */}
      
    </div>
  </div>
</nav>
  )
}

Navbar.defaultProps = {
    title: 'Esports',
    home: 'Home',
    about: 'About'
  };
