import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner, Stack } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';

const Footer = () => {
    const [company, setCompany] = useState();

    useEffect(() => {
        axios.get('company.json')
            .then(res => setCompany(res.data.Company))
            .catch(err => console.log(err))
    }, []);

    return (
        <Container>
            <Row className='justify-content-between'>
                <Col>
                    {
                        company ? (
                            <p>
                                {company.Name}<br />
                                {company.Contacts.Address.Street} {company.Contacts.Address.Number}<br />
                                {company.Contacts.Address.ZIP} {company.Contacts.Address.City}<br />
                                {company.Contacts.Telephone}<br />
                                <a href={`mailto:${company.Contacts.EMail}`}>{company.Contacts.EMail}</a>

                            </p>
                        ) : (
                            <Spinner />
                        )
                    }
                </Col>
                <Col>
                    {
                        company ? (
                            <Stack direction='horizontal' className='gap-2 justify-content-end'>                                
                                <a className='text-white' href={`https://www.${company.Contacts.Social.LinkedIn}`} target='_blank'><Linkedin /></a><br />
                                <a className='text-white' href={`https://www.${company.Contacts.Social.Instagram}`} target='_blank'><Instagram /></a><br />
                                <a className='text-white' href={`https://www.${company.Contacts.Social.Facebook}`} target='_blank'><Facebook /></a><br />
                            </Stack>
                        ) : (
                            <Spinner />
                        )
                    }
                </Col>
            </Row>
        </Container>
    );
}

export default Footer