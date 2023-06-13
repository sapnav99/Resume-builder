import React from "react";
import Navibar from "./Navbar";
import { Provider } from "react-redux";
import Main from "./Main";
import Home from "./Home";
import View from "./View";
import Edit1 from "./Edit1";
import Edit2 from "./Edit2";
import Edit3 from "./Edit3";
import Edit4 from "./Edit4";
import Edit5 from "./Edit5";
import store from "./Store";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  //includes Routes and redux provider

  return (
    <Router>
      <Provider store={store}>
        <Navibar />
        <Routes>
        <Route exact path="/" element={<Main/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/view" element={<View/>} />
        <Route path="/edit1" element={<Edit1/>} />
        <Route path="/Edit2" element={<Edit2/>} />
        <Route path="/Edit3" element={<Edit3/>} />
        <Route path="/Edit4" element={<Edit4/>} />
        <Route path="/Edit5" element={<Edit5/>} />
        </Routes>
      </Provider>
    </Router>
  );
}

export default App;
