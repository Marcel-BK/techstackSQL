import React from "react";
import { Spinner, Card, Row, Col, Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const TechList = (props) => {
  const { techs } = props;
  //(das gleiche wie) const techs = props.techs;

  return (
    <>
      <h1 className='text-center mt-3 mb-5'>TechList</h1>
      {techs ? (
        // <ul className='row'>

          <div className='container'>
          <Row className='justify-content-center'>
          {techs.map((tech) => {
            return (
              <Card key={tech.fields.id} className='p-0 text-center' style={{ width: '18rem' }}>
                <Card.Header>
                  <div className='tech-list-pic-bg rounded shadow d-flex align-items-center'>
                    <img className='tech-list-pic' src={tech.fields.logoLink} alt={`${tech.fields.title} Logo`} />
                  </div>
                </Card.Header>
                <Card.Body className='p-0 d-flex align-items-end justify-content-center'>
                    <h3 className='my-2 tech-list-header'>{tech.fields.title}</h3>
                </Card.Body>
                <Card.Footer>
                  <Button className='my-2'><Link to={`/techs/${tech.fields.id}`}>More about {tech.fields.title} &#8594;</Link></Button>
                </Card.Footer>
              </Card>
            );
          })}
          </Row>
          </div>

        // </ul>
      ) : (
        <Spinner />
      )}
    </>
  );
};

export default TechList;
