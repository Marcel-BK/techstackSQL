import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { Stack } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const TechDetails = (props) => {
    const { techs } = props;
    const { id } = useParams();
    let tech;

    techs ? tech = techs.find(techItem => {
        return techItem.fields.id === parseInt(id);
    }) : tech = null;

    let test;

    techs ? console.log(tech.fields) : test = tech;

    return (
        (tech) ? (
            <>
                <Stack direction="horizontal">
                    <p><FontAwesomeIcon icon={faHome} /></p>
                    <p>{tech.fields.category}</p>
                </Stack>
                <div className='bg-light'>
                    <img src={tech.fields.logoLink} />
                </div>
                <div>
                    <p>{tech.fields.description}</p>
                </div>
            </>
        ) : ('Loading')
    )
}

export default TechDetails