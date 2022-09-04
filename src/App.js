import { Routes, Route } from 'react-router-dom';
import OrderDetail from './components/OrderDetail/OrderDetail';
import Management from './components/Management/Management';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/mypage" element={<OrderDetail />} />
        <Route path="/manage" element={<Management />} />
        <Route path="/regist" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
