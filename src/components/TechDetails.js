import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumb, Spinner, Stack } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const TechDetails = (props) => {
    const { techs } = props;
    const { id } = useParams();
    let tech = null;
    let relatedTechs = [];

    techs ? tech = techs.find(techItem => {
        return techItem.fields.id === parseInt(id);
    }) : tech = null;

    tech && techs.map((techItem) => {
        if (tech.category === techItem.category) {
            relatedTechs.push(techItem);
        }
    });

    return (
        <>
            {(tech) ? (
                <div id='techDetails'>
                    {/* <Breadcrumbs
                    path={[tech.fields.category, id]}
                    name={tech.fields.title}
                /> */}
                    <div className='bg-light'>
                        <figure className='w-25 mx-auto py-4'>
                            <img className='w-100' src={tech.fields.logoLink} />
                        </figure>
                    </div>
                    <div>
                        <div className='w-75 mx-auto'>
                            <h2>{tech.fields.title}</h2>
                        </div>
                        <div
                            id='techDescription'
                            className='w-75 mx-auto'
                            dangerouslySetInnerHTML={{ __html: tech.fields.description }}
                        >
                        </div>
                        <div className='w-75 mx-auto wiki_link py-4'>
                            <a href={tech.fields.wikiLink} target='_blank'>Go to wiki page</a>
                        </div>
                    </div>
                    <div id='relatedTechs'>
                        {
                            relatedTechs.map((techItem, index) => {
                                return <p key={index}>{techItem.fields.name}</p>
                            })
                        }
                    </div>
                </div>
            ) : (<Spinner />)
            }
        </>
    )
}

export default TechDetails