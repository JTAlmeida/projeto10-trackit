import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import GlobalStyle from "../css/GlobalStyle";
import PrivatePage from "./PrivatePage";
import SignIn from "./SignIn/SignIn";
import Signup from "./Signup/Signup";
import Habits from "./Habits/Habits";
import Today from "./Today/Today";
import History from "./History/History";

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />}></Route>
          <Route path="/cadastro" element={<Signup />}></Route>
          <Route
            path="/habitos"
            element={
              <PrivatePage>
                <Habits />
              </PrivatePage>
            }
          ></Route>
          <Route
            path="/hoje"
            element={
              <PrivatePage>
                <Today />
              </PrivatePage>
            }
          ></Route>
          <Route
            path="/historico"
            element={
              <PrivatePage>
                <History />
              </PrivatePage>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
