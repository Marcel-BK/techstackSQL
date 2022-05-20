import { Route, Routes } from 'react-router';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import TechDetails from './components/TechDetails';
import TechList from './components/TechList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <div className="App">
            <header className="App-header">
                <NavBar />
            </header>
            <main>
                <Routes>
                    <Route path='/' element={<TechList />} />
                    <Route path='/techs/:id' element={<TechDetails />} />
                    <Route path='/techs/category/:catid' element={<TechList filter={true}/>} />
                </Routes>
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default App;
