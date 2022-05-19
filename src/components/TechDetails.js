import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';

const TechDetails = (props) => {
    const { id } = useParams();
    const [tech, setTech] = useState(null);
    const [relatedTechs, setRelatedTechs] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_TECHSTACK_API}/api/techs/${id}`)
            .then(response => {
                const catId = response.data.tech.cat_id;
                console.log(response.data.tech);
                setTech(response.data.tech);
                axios
                    .get(`${process.env.REACT_APP_TECHSTACK_API}/api/techs/category/${catId}`)
                    .then(res2 => {
                        setRelatedTechs(res2.techs);
                        console.log(res2.techs);
                        setLoading(false);
                    })
                    .catch(err => console.log(err));
            })
            .catch(err => console.log(err));

    }, []);

    return (
        <>
            {
                (loading) ? (<Spinner />) : (
                    <div id='techDetails'>
                        {/* <Breadcrumbs
                    path={[tech.fields.category, id]}
                    name={tech.fields.title}
                /> */}
                        <div className='bg-light'>
                            <figure className='w-25 mx-auto py-4'>
                                <img className='w-100' src={tech.logo_link} alt={`Logo of ${tech.title}`} />
                            </figure>
                        </div>
                        <div>
                            <div className='w-75 mx-auto'>
                                <h2>{tech.title}</h2>
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
                        </div>
                    </div>
                )
            }
            {
                <>
                    {/* 
                    (loading) ? (<Spinner />) : (
                    <div id='relatedTechs'>
                        <h4>related Techs:</h4>
                        {
                            relatedTechs.map((relatedTech, index) => {
                                return <p key={index}>{relatedTech.title}</p>
                            })
                        }
                    </div>
                    ) */}
                </>
            }
        </>
    )
}

export default TechDetails