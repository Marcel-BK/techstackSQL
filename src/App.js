import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

const App = () => {
    const contentful = require('contentful');

    const client = contentful.createClient({
        space: 'nar81f64yzsp',
        environment: 'master', // defaults to 'master' if not set
        accessToken: '5mqDvnN1n79lahTS_wM_QwQ2lxOg51XlM6L8JEpIbes'
    })

    const [entries, setEntries] = useState();

    useEffect(() => {
        client.getEntries()
            .then((response) => {
                console.log(response.items);
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
