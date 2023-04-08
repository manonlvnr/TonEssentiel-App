import './App.scss';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/homepage/Homepage';
import OilsForm from './components/OilsForm';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='Homepage'>
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/admin' element={<OilsForm />} />
          </Routes>  
        </div>
      </Router>
    </div>
  );
}

export default App;
