//import Header from "./components/Header";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Menu from "./components/Menu";
import { useState } from "react";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";

function App() {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  /*const [destinationData, setDestinationData] = useState<
    | {
        description: string;
        distance: string;
        images: { png: string; webp: string };
        name: string;
        travel: string;
        _id: string;
      }[]
    | null
  >(null);*/

  return (
    <div className="h-[100%]">
      <Header setShowMenu={setShowMenu} showMenu={showMenu} />
      {showMenu ? <Menu setShowMenu={setShowMenu} /> : null}

      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </div>
  );
}

export default App;

/*setDestinationData={setDestinationData}*/
