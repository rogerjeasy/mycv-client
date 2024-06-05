import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../views/Home";
import Contact from "../../views/Contact";
import Header from "../../views/Header";
import Hobbies from "../../views/Hobbies";
import MlProjects from "../../views/MlProjects";
import WebProjects from "../../views/WebProjects";
import Publications from "../../views/Publications";
import FullCV from "../../views/FullCV";

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Header height="100" />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/web_projects" element={<WebProjects />} />
          <Route path="/ml_projects" element={<MlProjects />} />
          <Route path="/hobbies" element={<Hobbies />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/publications" element={<Publications />} />
          <Route path="/cv" element={<FullCV />} />

        </Routes>
      </BrowserRouter>
  );
};

export default AppRouter;