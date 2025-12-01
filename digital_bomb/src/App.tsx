import { HashRouter, Routes, Route } from "react-router-dom";
import Index from "./page";
import "./App.css"

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
