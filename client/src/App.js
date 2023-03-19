import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import OilsForm from './components/OilsForm';
import Homepage from './components/pages/Homepage/Homepage';
import Favorites from './components/pages/Favorites/Favorites';
import Menu from './components/pages/Menu/Menu';
import BottomBar from './components/organisms/BottomBar/BottomBar';

function App() {
  return (
    <div className="App">
      <Router>
        <div className=''>
          <BottomBar />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/admin' element={<OilsForm />} />
            <Route path='/favorites' element={<Favorites />} />
            <Route path='/menu' element={<Menu />} />
          </Routes>  
        </div>
      </Router>
    </div>
  );
}

export default App;
