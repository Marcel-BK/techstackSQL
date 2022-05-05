import { NavLink } from 'react-router-dom'
import { Dropdown, DropdownButton, Navbar } from 'react-bootstrap'
import '../HeaderFooter.css'

const NavBar = ({ techs }) => {
    let categories = [];

    techs && techs.map(tech => {
        categories.push(tech.fields.category);
    });

    categories = [...new Set(categories)];

    return (
        <nav >
            {/* <NavLink id='logo-link' to={`/`}><img id='logo' src='./TechStackLogo.svg' alt='Tech Stack Logo' /></NavLink> */}
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
                                                <NavLink to={`/categories/${category}`}>{category}</NavLink>
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