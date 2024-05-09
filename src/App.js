// File App.js
import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthTemplate from "./templates/AuthTemplate";
import LoginPage from "./pages/loginPage/loginPage";
import SignupPage from "./pages/signupPage/SignupPage";
import HomePage from "./pages/HomePage/HomePage";
import HomeTemplate from "./templates/HomeTemplate";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeTemplate />}>
          <Route index element={<HomePage />} />
        </Route>

        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;