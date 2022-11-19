import "./App.css";
import { Counter } from "./components/Counter";
import Shopping from "./components/Shopping";
import { Main } from "./components/Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/shopping" element={<Shopping />} />
      </Routes>
    </Router>
  );
}

export default App;
