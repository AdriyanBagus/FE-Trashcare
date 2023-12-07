import './App.css';
import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';
import Home from './pages/Home';
import BankSampah from './pages/BankSampah';
import Artikel from './pages/Artikel';
import Deteksi from './pages/Deteksi';
import Login from './pages/Login';
import Admin from './pages/Admin';
import Chatbot from './pages/Chatbot';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/artikel' element={<Artikel/>}/>
        <Route path='/banksampah' element={<BankSampah/>}/>
        <Route path='/deteksi' element={<Deteksi/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/chatbot' element={<Chatbot/>}/>
      </Routes>
    </Router>
  );
}

export default App;
