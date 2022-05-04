import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useState } from 'react';
import { ChatRightText } from 'react-bootstrap-icons';

const NavBar = ({ techs }) => {
    let categories = [];

    techs && techs.map(tech => {
        categories.push(tech.fields.category);
    });

    categories = [...new Set(categories)];

    return (
        <nav>
            <NavLink to={`/`}>Our Logo</NavLink>
            <ul>
                <li>
                    <NavLink to={`categories`}>Category-List</NavLink>
                </li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="" className='text-white' id="dropdown-basic">
                            Category Filter
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                categories && (
                                    categories.map((category, i) => {
                                        return (
                                            <div key={`catItem_${i}`} className='px-3 my-2'>
                                                <NavLink className={'text-dark'} to={`/categories/${category}`}>{category}</NavLink>
                                            </div>
                                        )
                                    })
                                )
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar