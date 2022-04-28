import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Stack } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';

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
            <>
                <Stack direction="horizontal">
                    <Link to={'/'} className='mx-2'><FontAwesomeIcon icon={faHome} /></Link>
                    <Link to={'/categories'}>{tech.fields.category}</Link>
                </Stack>
                <div className='bg-light'>
                    <figure className='w-25 mx-auto py-3'>
                        <img className='w-100' src={tech.fields.logoLink} />
                    </figure>
                </div>
                <div>
                    <div className='w-75 mx-auto' style={{ textAlign: 'justify' }} dangerouslySetInnerHTML={{ __html: tech.fields.description }}>
                    </div>
                </div>
                {relatedTechs.map(techItem => {
                    return <p></p>
                })}
            </>
        ) : ('Loading')
    )
}

export default TechDetails