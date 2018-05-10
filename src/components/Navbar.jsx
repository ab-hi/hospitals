import React, {Component} from 'react';

import {Link} from 'react-router-dom'

// Top Navbar component, logo routes to homepage
export default class Navbar extends Component{
    render(){
        return(
            <nav className="light-blue lighten-1" role="navigation">
                <div className="nav-wrapper container"><Link id="logo-container" to="/hospitals" className="brand-logo">Logo</Link>
                </div>
            </nav>
        )
    }
}