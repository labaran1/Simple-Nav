import React from "react";
import Navbar from "./Component/Layout/Navbar";
import "./App.css";
import { Router } from "@reach/router";
import Home from "./Component/Pages/Home";
import WebDev from "./Component/Pages/WebDev";
import MobileDev from "./Component/Pages/MobileDev";
import DataScience from "./Component/Pages/DataScience";
import Pricing from "./Component/Pages/Pricing";
import GetStarted from "./Component/Pages/GetStarted";

function App() {
  return (
    <div>
      <Navbar />
      <Router>
        <Home path="/" />
        <WebDev path="/webdev" />
        <MobileDev path="/mobiledev" />
        <DataScience path="/datascience" />
        <Pricing path="/pricing" />
        <GetStarted path="/getstarted" />
      </Router>
    </div>
  );
}

export default App;
