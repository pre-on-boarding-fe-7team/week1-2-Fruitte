import { Routes, Route } from 'react-router-dom';

import { ROUTE } from './common/utils/constant';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Management from './components/Management/Management';
import NotFound from './components/NotFound/NotFound';
import OrderDetail from './components/OrderDetail/OrderDetail';
import ProductDetail from './components/ProductsDetail/ProductDetail';
import ProductsList from './components/ProductsList';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTE.MAIN} element={<ProductsList />} />
        <Route path={ROUTE.MY_PAGE} element={<OrderDetail />} />
        <Route path={ROUTE.MANAGE} element={<Management />} />
        <Route path={ROUTE.REGIST} element={<Registration />} />
        <Route path={ROUTE.DETAIL} element={<ProductDetail />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
