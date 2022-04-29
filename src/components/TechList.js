import React from "react";
import { Spinner } from "react-bootstrap";
import { Link } from 'react-router-dom';

const TechList = (props) => {
  const { techs } = props;
  //(das gleiche wie) const techs = props.techs;

  return (
    <>
      <h1>TechList</h1>
      {techs ? (
        <ul>
          {techs.map((tech) => {
            console.log(tech);
            return <li><Link to={`/techs/${tech.fields.id}`}>{tech.fields.title}</Link></li>;
          })}
        </ul>
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
