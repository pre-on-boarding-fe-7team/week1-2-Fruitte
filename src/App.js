import { Routes, Route } from 'react-router-dom';
import OrderDetail from './components/OrderDetail/OrderDetail';
import Management from './components/Management/Management';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/mypage" element={<OrderDetail />} />
        <Route path="/manage" element={<Management />} />
      </Routes>
    </>
  );
}

export default App;
