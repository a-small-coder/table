import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

import './styles.scss'
import NoMatchPage from './components/NoMatchPage/NoMatchPage';
import TablePage from './components/TablePage';
import AuthPageContainer from './components/Autorization/AuthPageContainer';
import { useState } from 'react';
import Exit from './components/Autorization/Exit';

function App() {
  const [isUserLogin, setIsUserLogin] = useState(true)

  const setAuth = (data) =>{
    setIsUserLogin(data)
  }
  return (
    <BrowserRouter>
    <div className='wrapper'>
      <Header auth={isUserLogin}/>
      <Routes>
        <Route path='/table' element={<TablePage auth={isUserLogin} />}></Route>
        <Route path='/auth' element={<AuthPageContainer auth={isUserLogin} setAuth={setIsUserLogin}/>}></Route>
        <Route path='/exit' element={<Exit auth={isUserLogin} setAuth={setAuth}/>}></Route>
        <Route path='*' element={<NoMatchPage/>}></Route>
      </Routes>
    </div>
      
      
    </BrowserRouter>
  );
}

export default App;
