import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import OilsForm from './components/OilsForm';
import Homepage from './components/pages/Homepage/Homepage';
import Favorites from './components/pages/Favorites/Favorites';
import BottomBar from './components/organisms/BottomBar/BottomBar';
import Header from './components/organisms/Header/Header';
import Diffusions from './components/pages/Diffusions/Diffusions';
import AllOils from './components/pages/AllOils/AllOils';
import Themes from './components/pages/Themes/Themes';
import SymptomsList from './components/pages/Symptoms/SymptomsList';
import Menu from './components/pages/Menu/Menu';
import SymptomsResult from './components/pages/Symptoms/SymptomsResult';

function App() {
  return (
    <div className="App">
      <Router>
          <Header />
          <BottomBar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/admin' element={<OilsForm />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/diffusions' element={<Diffusions />} />
            <Route path='/allOils' element={<AllOils />} />
            <Route path='/themes' element={<Themes />} />
            <Route path='/symptoms' element={<SymptomsList />} />
            <Route path='/symptoms/:name' element={<SymptomsResult />} />
          </Routes>  
      </Router>
    </div>
  );
}

export default App;
