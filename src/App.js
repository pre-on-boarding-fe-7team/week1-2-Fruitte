import { Route, Routes } from 'react-router';
import Registration from './components/Registration/Registration';

function App() {
  return (
    <Routes>
      <Route path="/regist" element={<Registration />} />
    </Routes>
  );
}

export default App;
