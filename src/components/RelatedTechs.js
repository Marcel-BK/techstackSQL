import axios from 'axios';
import { Spinner } from 'react-bootstrap';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const RelatedTechs = ({ catId }) => {
    const [techs, setTechs] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_TECHSTACK_API}/api/techs/category/${catId}`)
            .then(res => {
                setTechs(res.data.techs);
                setLoading(false);
            })
    }, [catId])

    return (
        <>
            {loading && <Spinner />}
            {!loading && (
                techs.map((tech, index) => {
                    return <Link className='me-2' to={`/techs/${tech.id}`} key={`related_${index}`}>{tech.title}</Link>
                })
            )}
        </>
    )
}

export default RelatedTechs