import React from "react";
import { createRoot } from "react-dom/client";
import Pet from "./Pets";


const App = () => {
  return (
    <>
      <h1>Adopt me</h1>
      <Pet name="Neo" animal="Cat" breed="Grey-Cat"/>
    </>
  )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));