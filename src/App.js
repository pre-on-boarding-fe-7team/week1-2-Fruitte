import { Route, Routes } from 'react-router-dom';
import Management from './components/Management/Management';
import Header from './components/Header/Header';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/manage" element={<Management />} />
      </Routes>
    </>
  );
}

export default App;
