import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ColorTest from './components/common/ColorTest';
import Home from './pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/color-test" element={<ColorTest />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
