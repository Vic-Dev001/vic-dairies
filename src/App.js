import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AllPosts from "./components/AllPosts.js";
import OnePost from "./components/OnePost.js";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route element={<AllPosts />} path="/" exact />
          <Route element={<OnePost />} path="/:slug" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
