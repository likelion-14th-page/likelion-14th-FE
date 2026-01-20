import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ColorTest from "./components/common/ColorTest"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/color-test" element={<ColorTest />} />
      </Routes>
    </Router>
  )
}

export default App
