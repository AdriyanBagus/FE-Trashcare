import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import BankSampah from './pages/BankSampah';
import Artikel from './pages/Artikel';
import Deteksi from './pages/Deteksi';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Chatbot from './pages/Chatbot';
import Berita from './pages/Berita';
import TambahData from './pages/TambahData';
import EditData from './pages/EditData'
import ViewData from './pages/ViewData'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/artikel' element={<Artikel/>}/>
        <Route path='/berita' element={<Berita/>}/>
        <Route path='/banksampah' element={<BankSampah/>}/>
        <Route path='/deteksi' element={<Deteksi/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
        <Route path='/tambahdata' element={<TambahData/>}/>
        <Route path='/editdata' element={<EditData/>}/>
        <Route path='/viewdata' element={<ViewData/>}/>
      </Routes>
    </Router>
  );
}

export default App;
