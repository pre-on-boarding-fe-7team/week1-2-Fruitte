import { Route, Routes } from 'react-router-dom';
import Management from './components/Management/Management';
import Header from './components/Header/Header';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/manage" element={<Management />} />
        <Route path="/regist" element={<Registration />} />
      </Routes>
    </>
  );
}

export default App;
