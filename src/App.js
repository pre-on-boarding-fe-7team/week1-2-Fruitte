import { Routes, Route } from 'react-router-dom';
import OrderDetail from './components/OrderDetail/OrderDetail';

function App() {
  return (
    <Routes>
      <Route path="/" element={<OrderDetail />} />
    </Routes>
  );
}

export default App;
