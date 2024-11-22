import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage/HomePage';
import Produto from './Pages/ProductPage/ProductPage';
import ProductBuy from './Pages/fiubauojba/ProductBuy';
import LoginPage from './Pages/LoginPage/LoginPage';
import CadastroPage from './Pages/CadastroPage/CadastroPage';
import './App.css';



function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />  
        <Route path="/produtos" element={<Produto/>} />      
        <Route path="/produtos/:id" element={<ProductBuy/>} /> 

        <Route path="/cadastro" element={<CadastroPage/>} />  
        <Route path="/login" element={<LoginPage/>} />            
      </Routes>
    </Router>
    
  
  );
}

export default App;