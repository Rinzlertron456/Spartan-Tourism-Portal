import React from 'react'
import PropTypes from 'prop-types'

export default function NavBar(props) {
  const handleNavLink=(e)=>{
    const hrefValue=e.target.getAttribute('href');
    if(hrefValue==='#'){
      e.preventDefault();
      props.DisplayAlert(" Watch your step, my guest! This one is in ruins.","danger");
    }
  }

    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className={`navbar-brand text-${props.mode==='light'?'dark':'light'}`} href="/" onClick={handleNavLink}>
        <img src="https://whatthelogo.com/storage/logos/frank-millers-300-8841.png" alt="Logo" width="150" height="50" className="d-inline-block align-text-top"/>
        {props.name}
      </a>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="/about" onClick={handleNavLink}>Spartan Abode</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} aria-current="page" href="/testimonial" onClick={handleNavLink}>Testimonials</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} href="/perks" onClick={handleNavLink}>Perks</a>
          </li>
          <li className="nav-item">
            <a className={`nav-link active text-${props.mode==='light'?'dark':'light'}`} href="/pricing" onClick={handleNavLink}>Pricing</a>
          </li>
          <li className={`nav-item dropdown text-${props.mode==='light'?'dark':'light'}`} data-bs-theme="dark">
            <button type="button" className={`btn btn-danger dropdown-toggle`} data-bs-toggle="dropdown" aria-expanded="false">
              Historic Places
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
              <li><a className="dropdown-item" href="https://www.gtp.gr/TDirectoryDetails.asp?ID=14991" onClick={handleNavLink}>Acropolis</a></li>
              <li><a className="dropdown-item" href="https://en.wikipedia.org/wiki/Menelaion" onClick={handleNavLink}>Menelaion</a></li>
              <li><a className="dropdown-item" href="https://en.wikipedia.org/wiki/Mystras" onClick={handleNavLink}>Mystras</a></li>
              <li><a className="dropdown-item" href="https://en.wikipedia.org/wiki/Taygetus" onClick={handleNavLink}>Taygetus</a></li>
              <li><hr className="dropdown-divider"/></li>
              <li ><a className="dropdown-item" href="#" onClick={handleNavLink}>Uncharted Waters</a></li>
            </ul>
          </li>
        </ul>
      </div>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn-search" type="submit">Search</button>
      </form>
      <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
        <input className="form-check-input" type="checkbox" onClick={props.toggleMode} id="flexSwitchCheckDefault"/>
        {/* <input type='button' style={{backgroundColor:'red',width:'25%',display:'flex',borderRadius:'10px'}}></input> */}
        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
    </div>
  </nav>
    )
}

NavBar.propTypes={
    name:PropTypes.string.isRequired,
    mode:PropTypes.string.isRequired,
    toggleMode:PropTypes.string.isRequired,
}

NavBar.defaultProps={
    name:'Set App Name here',
    mode:'Set Color here',
    toggleMode:'Set Mode here',
};