import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Homepage from './components/homepage/Homepage';

function App() {
  return (
    <div className="App">
      <Router>
        <div className='Homepage'>
          <Routes>
            <Route path='/' element={<Homepage />} />
          </Routes>  
        </div>
      </Router>
    </div>
  );
}

export default App;
