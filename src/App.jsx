import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import ColorTest from "./components/common/ColorTest"
import Events from "./pages/Events"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/color-test" element={<ColorTest />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  )
}

export default App
