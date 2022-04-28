import { faArrowRightLong, faHome } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Breadcrumb, BreadcrumbItem, Stack } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Breadcrumbs = (props) => {
    const { bcItems } = props;
    let path = ``;

    return (
        <div id='breadcrumbs' className='py-2'>
            <ul>
                <li>
                    <Link to={'/'}>
                        <FontAwesomeIcon icon={faHome} />
                    </Link>
                </li>
                {
                    bcItems.map(bcItem => {
                        { path += `/${bcItem}` }
                        {
                            return (

                                <li key={`bc_${bcItem}`}>
                                    <FontAwesomeIcon icon={faArrowRightLong} className='mx-2' />
                                    <Link to={path}>
                                        {`${bcItem}`}
                                    </Link>
                                </li>
                            )
                        }
                    })
                }
            </ul>
        </div>
    )
}

export default Breadcrumbs