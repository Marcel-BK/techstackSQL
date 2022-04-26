import { useEffect, useState } from 'react';
import './App.css';

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
            </header>
            <main>

            </main>
            <footer>

            </footer>
        </div>
    );
}

export default App;
