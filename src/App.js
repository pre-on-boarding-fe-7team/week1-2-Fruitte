import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Management from './pages/Management/Management';
import Header from './components/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/manage" element={<Management />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
