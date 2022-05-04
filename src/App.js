import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header';

import './styles.scss'
import NoMatchPage from './components/NoMatchPage/NoMatchPage';
import TablePage from './components/TablePage';

function App() {
  return (
    <BrowserRouter>
    <div className='wrapper'>
      <Header/>
      <Routes>
        {/* <Route path='/portfolio' element={<MainPage/>}></Route> */}
        <Route path='/table' element={<TablePage/>}></Route>
        <Route path="*" element={<NoMatchPage/>}></Route>
      </Routes>
    </div>
      
      
    </BrowserRouter>
  );
}

export default App;
