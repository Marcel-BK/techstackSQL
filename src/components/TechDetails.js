import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RelatedTechs from './RelatedTechs';

const TechDetails = (props) => {
    const { id } = useParams();
    const [tech, setTech] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_TECHSTACK_API}/api/techs/${id}`)
            .then(response => {
                setTech(response.data.tech);
                setLoading(false);
            })
            .catch(err => console.log(err));

    }, [id]);

    return (
        <>
            {
                (loading) ? (<Spinner />) : (
                    <>
                        <div id='techDetails'>
                            <div className='bg-light'>
                                <figure className='w-25 mx-auto py-4'>
                                    <img className='w-100' src={tech.logo_link} alt={`Logo of ${tech.title}`} />
                                </figure>
                            </div>
                            <div>
                                <div className='w-75 mx-auto'>
                                    <h2>{tech.title}</h2>
                                    <p>Author: {tech.username}</p>
                                </div>
                                <div
                                    id='techDescription'
                                    className='w-75 mx-auto'
                                    dangerouslySetInnerHTML={{ __html: tech.description }}
                                >
                                </div>
                                <div className='w-75 mx-auto wiki_link py-4'>
                                    <a href={tech.wiki_link} target='_blank' rel="noreferrer">Go to wiki page</a>
                                </div>
                                <div className='w-75 mx-auto wiki_link py-4'>
                                    <h4>Techs in same Category:</h4>
                                    <RelatedTechs catId={tech.cat_id} />
                                </div>
                            </div>
                        </div>
                    </>
                )
            }
        </>
    )
}

export default TechDetails