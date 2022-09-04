import './App.css';
import { Routes, Route } from 'react-router-dom';
import ProductDetail from './pages/ProductDetail';
function App() {
  return (
    <Routes>
      <Route path="/detail/:id" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
