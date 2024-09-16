import { RiStickyNoteAddFill } from "react-icons/ri";
import { useRef } from "react";
import { Nav } from "./components/Nav";
import { MainContext } from "./components/MainContext";
import { HomePage } from "./Pages/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Recycle } from "./Pages/Recycle";
import { AddNote } from "./Pages/AddNote";

function App() {
  const navbarRef = useRef(null);

  return (
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={ <HomePage navbarRef={navbarRef}/>}/>
          <Route path="/recycle" element={ <Recycle navbarRef={navbarRef}/>}/>
          <Route path="/addnote" element={ <AddNote/>}/>
          <Route path="/:id" element={<AddNote/>}/>
        </Routes>
      </BrowserRouter>
  
  );
}

export default App
