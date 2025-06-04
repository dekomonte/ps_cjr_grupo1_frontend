import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginA from './pages/loginA';
import LoginB from './pages/loginB';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginA />} />
        <Route path="/criar-conta" element={<LoginB />} />
      </Routes>
    </Router>
  );
}
export default App;