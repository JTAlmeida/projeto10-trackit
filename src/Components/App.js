import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "../css/reset.css";
import "../css/style.css";
import Header from "./Header";
import Login from "./Login";
import Signup from "./Signup";

export default function App() {

  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/cadastro" element={<Signup />}></Route>
          <Route path="/habitos" element={<Signup />}></Route>
          <Route path="/hoje" element={<Signup />}></Route>
          <Route path="/historico" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
