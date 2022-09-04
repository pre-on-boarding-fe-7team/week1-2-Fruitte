import { Routes, Route } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import Header from './components/Header/Header';
import ProductsList from './components/ProductsList';
import Management from './components/Management/Management';
import OrderDetail from './components/OrderDetail/OrderDetail';
import Registration from './components/Registration/Registration';
import ProductDetail from './components/ProductsDetail/ProductDetail';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTE.MAIN} element={<ProductsList />} />
        <Route path="/mypage" element={<OrderDetail />} />
        <Route path="/manage" element={<Management />} />
        <Route path="/regist" element={<Registration />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
      </Routes>
    </>
  );
}

export default App;
