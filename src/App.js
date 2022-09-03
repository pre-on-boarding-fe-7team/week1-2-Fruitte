import './App.css';
import { Routes, Route } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import ProductsList from './components/ProductsList';

function App() {
  return (
    <Routes>
      <Route path={ROUTE.MAIN} element={<ProductsList />} />
    </Routes>
  );
}

export default App;
