import "./App.css";
import WebFont from "webfontloader";

import Table from "./components/Table";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Boxes from "./components/Boxes";

function App() {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Lato", "Bitter"],
      },
    });
  }, []);

  return (
    <div className="App d-flex-column">
      <HelmetProvider>
        <style>
          {
            "body { background-image: linear-gradient(200deg, #F56476, #731DD8); }"
          }
        </style>
      </HelmetProvider>
      <h1 className="text-center" style={{ color: "#291528" }}>
        Tinx & Maisie
      </h1>
      <Table />
      <Boxes />
    </div>
  );
}

export default App;
