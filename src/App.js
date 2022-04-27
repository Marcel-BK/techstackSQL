import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TechDetails from './components/TechDetails';
import TechList from './components/TechList';

const App = () => {
    const contentful = require('contentful');

    const [entries, setEntries] = useState();

    useEffect(() => {
        const client = contentful.createClient({
            space: process.env.REACT_APP_SPACE_ID,
            environment: process.env.REACT_APP_ENVIONMENT, // defaults to 'master' if not set
            accessToken: process.env.REACT_APP_ACCESS_TOKEN
        });

        client.getEntries()
            .then((response) => {
                setEntries(response.items);
            })
            .catch(console.error);

    }, []);

    const test = () => {
        console.log(entries);
        entries.map((entry) => {
            console.log(entry.fields);
        });
    }

    return (
        <div className="App">
            <header className="App-header">
                {entries ? test() : 'Loading...'}
                <NavBar />
                <h1>Here comes the header</h1>
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<TechList techs={entries} />} />
                    <Route path='/techs/:id' element={<TechDetails techs={entries} />} />
                    {/* <Route path='/' element={<TechList />} /> */}
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
