import { Routes, Route } from 'react-router-dom';
import { ROUTE } from './common/utils/constant';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import ProductsList from './components/ProductsList';
import Management from './components/Management/Management';
import OrderDetail from './components/OrderDetail/OrderDetail';
import Registration from './components/Registration/Registration';
import ProductDetail from './components/ProductsDetail/ProductDetail';
import NotFound from './components/NotFound/NotFound';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path={ROUTE.MAIN} element={<ProductsList />} />
        <Route path={ROUTE.MY_PAGE} element={<OrderDetail />} />
        <Route path={ROUTE.MANAGE} element={<Management />} />
        <Route path={ROUTE.REGIST} element={<Registration />} />
        <Route path={ROUTE.DETAIL_ID} element={<ProductDetail />} />
        <Route path={ROUTE.NOT_FOUND} element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
