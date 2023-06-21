// import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Experince from "./pages/Experince";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" Component={Home} />
        <Route path="/experience" Component={Experince} />
        <Route path="/profile" Component={Profile} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
