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
                  <img className='tech-list-pic' src={tech.fields.logoLink} alt={`${tech.fields.title} Logo`} />
                </Card.Header>
                <Card.Body className='p-0 d-flex align-items-end justify-content-center'>
                    <h3 className='my-2 text-dark'>{tech.fields.title}</h3>
                </Card.Body>
                <Card.Footer>
                  <Button className='my-2'><Link to={`/techs/${tech.fields.id}`}>More about {tech.fields.title} &#10132;</Link></Button>
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

// import React from 'react'
// import { useState, useEffect } from 'react';

// const TechList = () => {

//   let client = contentful.createClient({
//     space: process.env.REACT_APP_SPACE_ID,
//     accessToken: process.env.REACT_APP_ACCESS_TOKEN,
//   });

//   const [articles, setArticles] = useState(null);

//   useEffect(() => {
//     fetch("https://cdn.contentful.com")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data.hits);
//         setArticles(data.hits);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   return (
//     <h1>.</h1>

//     <div className="App">
//       <h1>Fetch</h1>
//       {articles
//         ? articles.map((article) => (
//             <div key={article.id}>
//               <h2>{article.title}</h2>
//               <p>{article.logolink}</p>
//             </div>
//           ))
//         : "Loading..."}
//     </div>

//     <>
//     <div class="row rounded showcase justify-content-center">
//       <div class="row">
//         <div class="col d-flex justify-content-center"><img class="showcase-bild rounded" src="#" alt="Bild" /></div>
//       </div>
//       <div className='col rounded showcase-kasten text-center'>
//         <h4 className='showcase-head mb-2'>HTML</h4>
//         <div className='mb-4'><button className='btn btn-dark'>More &#10132;</button></div>
//       </div>
//     </div>
//     </>
//   );
// }

// export default TechList
