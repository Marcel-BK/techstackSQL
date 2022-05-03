import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownButton } from 'react-bootstrap'
import { useState } from 'react';

const NavBar = ({ techs }) => {

    // const [categories, setCategories] = useState([]);
    let categories = [];
    console.log(techs);

    let tempCategories = [];

    techs && techs.map(tech => {
        console.log(tech.fields);
        categories.push(tech.fields.category);
    });

    categories = [...new Set(categories)];


    console.log(categories);
    return (
        <nav>
            <NavLink to={`/`}>Our Logo</NavLink>
            <ul>
                <li>
                    <NavLink to={`categories`}>Category-List</NavLink>
                </li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                            Category Filter
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                categories && (
                                    categories.map(category => {
                                        return (
                                            <div className='px-3 my-2'>
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