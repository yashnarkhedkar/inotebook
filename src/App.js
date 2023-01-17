import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/About";
import NoteState from "./context/NoteState";
import Login from "./components/Login";
import SignUp from "./components/Signup";
import Landing from "./components/Landing";

const App = () => {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          <div className="container">
            <Routes>
              <Route exact path="/" element={<Landing />} />
              <Route exact path="/home" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<SignUp />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
