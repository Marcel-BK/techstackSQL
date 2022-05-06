import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Col, Container, Row, Spinner, Stack } from 'react-bootstrap';
import { Facebook, Instagram, Linkedin } from 'react-bootstrap-icons';
import '../HeaderFooter.css'


const Footer = () => {
    const [company, setCompany] = useState();

    useEffect(() => {
        axios.get('/company.json')
            .then(res => setCompany(res.data.Company))
            .catch(err => console.log(err))
    }, []);

    return (
        <div className='footer-container d-flex justify-content-between align-items-center'>
            {
                company ? (
                    <p className='CompanyText'>
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
            {
                company ? (
                    <>
                        <div>
                            <h3>Social</h3>
                            <Stack direction='horizontal' className='gap-2 justify-content-end social-icons'>
                                <a className='social-icon' href={`https://www.${company.Contacts.Social.LinkedIn}`} target='_blank'><Linkedin /></a><br />
                                <a className='social-icon' href={`https://www.${company.Contacts.Social.Instagram}`} target='_blank'><Instagram /></a><br />
                                <a className='social-icon' href={`https://www.${company.Contacts.Social.Facebook}`} target='_blank'><Facebook /></a><br />
                            </Stack>
                        </div>
                    </>
                ) : (
                    <Spinner />
                )
            }

        </div>
    );
}

export default Footer