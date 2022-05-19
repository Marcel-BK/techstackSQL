import { NavLink } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'
import '../HeaderFooter.css'
import { useEffect, useState } from 'react'
import axios from 'axios'

const NavBar = ({ techs }) => {
    const [categories, setCategories] = useState();

    useEffect(() => {
        axios
        .get(`${process.env.REACT_APP_TECHSTACK_API}/api/categories`)
        .then(res => {
            setCategories(res.data.categories);
        })
    }, [])

    return (
        <nav >
            <NavLink id='logo-link' to={`/`} />
            <ul>
                <li>
                    <NavLink to={`categories`}>Category-List</NavLink>
                </li>
                <li>
                    <Dropdown>
                        <Dropdown.Toggle variant=""  id="dropdown-basic">
                            Category-Filter
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            {
                                categories && (
                                    categories.map((category, i) => {
                                        return (
                                            <div key={`catItem_${i}`} className='px-3 my-2 dd-item'>
                                                <NavLink to={`/categories/${category.id}`}>{category.title}</NavLink>
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