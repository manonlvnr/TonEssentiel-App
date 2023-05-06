import './App.scss';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import OilsForm from './components/OilsForm';
import Homepage from './components/pages/Homepage/Homepage';
import Favorites from './components/pages/Favorites/Favorites';
import BottomBar from './components/organisms/BottomBar/BottomBar';
import Header from './components/organisms/Header/Header';
import DiffusionsList from './components/pages/Diffusions/DiffusionsList';
import AllOils from './components/pages/AllOils/AllOils';
import ThemesList from './components/pages/Themes/ThemesList';
import SymptomsList from './components/pages/Symptoms/SymptomsList';
import Menu from './components/pages/Menu/Menu';
import SymptomsResult from './components/pages/Symptoms/SymptomsResult';
import ThemesResult from './components/pages/Themes/ThemesResult';
import DiffusionsResult from './components/pages/Diffusions/DiffusionsResult';
import Oil from './components/pages/Oil/Oil';
import Signin from './components/pages/Signin/Signin';
import Signup from './components/pages/Signup/Signup';
import { useAuthContext } from './hooks/useAuthContext';
import Faq from './components/pages/Faq/Faq';
import Uses from './components/pages/Uses/Uses';
import Sources from './components/pages/Sources/Sources';
import Settings from './components/pages/Settings/Settings';
import Account from './components/pages/Account/Account';
import SearchResult from './components/pages/SearchResult/SearchResult';
import ForgotPassword from './components/pages/ForgotPassword/ForgotPassword';
import ResetPassword from './components/pages/ResetPassword/ResetPassword';


function App() {
  const { user } = useAuthContext();

  return (
    <div className="App">
      <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Homepage />} />
            <Route path='/admin' element={<OilsForm />} />
            <Route path='/favorites' element={user ? <Favorites /> : <Navigate to="/signin" />} />
            <Route path='/menu' element={<Menu />} />
            <Route path='/diffusions' element={<DiffusionsList />} />
            <Route path='/diffusions/:name' element={<DiffusionsResult />} />
            <Route path='/allOils' element={<AllOils />} />
            <Route path='/themes' element={<ThemesList />} />
            <Route path='/themes/:theme' element={<ThemesResult />} />
            <Route path='/symptoms' element={<SymptomsList />} />
            <Route path='/symptoms/:name' element={<SymptomsResult />} />
            <Route path='/allOils/:oil' element={<Oil />} />
            <Route path='/signin' element={!user ? <Signin /> : <Navigate to="/"/>} />
            <Route path='/signup' element={!user ? <Signup /> : <Navigate to="/"/>} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/utilisations' element={<Uses />} />
            <Route path='/sources' element={<Sources />} />
            <Route path='/parametres' element={<Settings />} />
            <Route path='/account' element={user ? <Account /> : <Navigate to="/signin" />} />
            <Route path='/search' element={ <SearchResult />} />
            <Route path='/forgotPassword' element={<ForgotPassword />} />
            <Route path='/reset-password/:id/:token' element={<ResetPassword />} />
          </Routes>  
          <BottomBar />
      </Router>
    </div>
  );
}

export default App;
