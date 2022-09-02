import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Management from './pages/Management';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<ProductLists />} /> */}
        <Route path="/manage" element={<Management />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
