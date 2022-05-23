import axios from "axios";
import React, { useEffect, useState } from "react";
import { Spinner, Card, Row, Button } from "react-bootstrap";
import { Link, useParams } from 'react-router-dom';

const TechList = ({ filter }) => {
    const { catid } = useParams();
    const [techs, setTechs] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [catName, setCatName] = useState();

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_TECHSTACK_API}/api/techs`)
            .then(response => {
                if (!filter) {
                    setTechs(response.data.techs)
                } else if (filter) {
                    setTechs(response.data.techs.filter(tech => {
                        setCatName(tech.cat_title);
                        return (tech.cat_id === catid)
                    }));
                }

                setLoading(false);
            })
            .catch(err => setError(err.message));
    }, [filter, catid]);

    return (
        <>
            {error && <h1>{error}</h1>}
            {!filter ? <h1 className='text-center mt-3 mb-5'>TechList</h1> : <h1 className='text-center mt-3 mb-5'>TechList: {techs[0].cat_title}</h1>}
            {
                loading ? <Spinner /> : (
                    <div className='container'>
                        <Row className='justify-content-center'>
                            {techs.map((tech) => {
                                return (
                                    <Card key={tech.id} className='p-0 text-center' style={{ width: '18rem' }}>
                                        <Card.Header>
                                            <div className='tech-list-pic-bg rounded shadow d-flex align-items-center'>
                                                <img className='tech-list-pic' src={tech.logo_link} alt={`${tech.title} Logo`} />
                                            </div>
                                        </Card.Header>
                                        <Card.Body className='p-0 d-flex align-items-end justify-content-center'>
                                            <h3 className='my-2 tech-list-header'>{tech.title}</h3>
                                        </Card.Body>
                                        <Card.Footer>
                                            <Button className='my-2'><Link to={`/techs/${tech.id}`}>More about {tech.title} &#8594;</Link></Button>
                                        </Card.Footer>
                                    </Card>
                                );
                            })}
                        </Row>
                    </div>
                )
            }
        </>
    );
};

export default TechList;
