import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Breadcrumb, Stack } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import Breadcrumbs from './Breadcrumbs';

const TechDetails = (props) => {
    const { techs } = props;
    const { id } = useParams();
    let tech;
    let relatedTechs = [];

    techs ? tech = techs.find(techItem => {
        return techItem.fields.id === parseInt(id);
    }) : tech = null;

    tech ? techs.map((techItem) => {
        if (tech.category === techItem.category) {
            relatedTechs.push(techItem);
        }
    }) : relatedTechs = [];

    return (
        (tech) ? (
            <div id='techDetails'>
                <Breadcrumbs bcItems={['techs', tech.fields.title]} />

                <div className='bg-light'>
                    <figure className='w-25 mx-auto py-3'>
                        <img className='w-100' src={tech.fields.logoLink} />
                    </figure>
                </div>
                <div>
                    <div
                    id='techDescription'
                        className='w-75 mx-auto'
                        dangerouslySetInnerHTML={{ __html: tech.fields.description }}
                    >
                    </div>
                </div>
                <div id='relatedTechs'>
                    {
                        relatedTechs.map(techItem => {
                            return <p>{techItem.fields.name}</p>
                        })
                    }
                </div>
            </div>
        ) : ('Loading')
    )
}

export default TechDetails