import { Route, Routes } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Registration from './pages/Registration/Registration';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/regist" element={<Registration />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
