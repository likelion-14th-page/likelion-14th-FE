import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layout from "./layout/Layout";
import ColorTest from "./components/common/ColorTest";
import Home from './pages/Home';
import Events from "./pages/Events";

function App() {
  return (
    <Router>
      <Routes>
        {/* 1. 레이아웃이 필요한 페이지들 (그룹으로 묶음) */}
        <Route element={<Layout />}>
          <Route path="/color-test" element={<ColorTest />} />
          <Route path="/events" element={<Events />} />
        </Route>

        {/* 2. 레이아웃이 필요 없는 페이지 (그룹 밖으로 뺌) */}
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;