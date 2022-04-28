import React from 'react'
import SearchBar from './SearchBar'
import NavContainer from './NavContainer'
import { NavLink } from 'react-router-dom'

const NavBar = (props) => {
    const { techs } = props;
    let i = 0;
    return (
        <nav>
            <NavLink to={`/`}>Our Logo</NavLink>
            <ul>
                <li>
                    <NavLink to={`categories`}>Category-List</NavLink>
                </li>
                <li>
                    <p>Category-Filter</p>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar