import React from 'react';
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light center">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav mx-auto">
                    <NavLink className="nav-link" exact to="/"><h5>INDIA</h5></NavLink>
                    <NavLink className="nav-link" exact to="/neIndia"><h5>NORTH EAST</h5></NavLink>
                    <NavLink className="nav-link" exact to="/world"><h5>WORLD</h5></NavLink>

                </div>
            </div>
        </nav>
    )
}

export default Navbar
