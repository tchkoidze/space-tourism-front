//import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import { useState } from "react";

function App() {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  return (
    <div className="h-[100%]">
      <Header setShowMenu={setShowMenu} showMenu={showMenu} />
      {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
