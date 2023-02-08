import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";

import { auth } from "./fairbase";

import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Favoritelist from "./Pages/Favoritelist";
import Recipe from "./Pages/Recipe";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
// console.log(userName);
  return (
    <div className="App">
   
      <Router>
      <Navbar name={userName} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home/>} />
          <Route path="/favorite" element={<Favoritelist/>} />
          <Route exact path="/:recipeId" element={<Recipe/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;