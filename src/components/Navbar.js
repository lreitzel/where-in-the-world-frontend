import React from "react";
import { NavLink } from "react-router-dom";

const links = [
    {
        name: 'Home',
        route: '/'
    },
    {
        name: 'Cuisines',
        route: '/cuisines'
    },
    {
        name: 'Recipes',
        route: '/recipes'
    }
]

function Navbar() {
    return (
        <div className="navbar">
            <ul className="nav tabs">
                {links.map(link => <li><NavLink to={link.route} key={link.name} className="nav item">{link.name}</NavLink></li>) }
            </ul>
        </div>
    )
}

export default Navbar