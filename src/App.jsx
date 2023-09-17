import "./App.css";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import { AnimatePresence } from "framer-motion";
function App() {
  return (
    <>
      <AnimatePresence mode="wait">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/menu" element={<Menu />}></Route>
          </Routes>
        </BrowserRouter>
      </AnimatePresence>
    </>
  );
}

export default App;
