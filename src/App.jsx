import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Tabelle from "./Tabelle";

function App() {
  const [suchbegriff, setSuchbegriff] = useState("");
  const [serviceTypAuswahl, setServiceTypAuswahl] = useState("");
  const [kantonAuswahl, setKantonAuswahl] = useState("");

  return (
    <div className="App">
      <Header
        suchbegriff={suchbegriff}
        setSuchbegriff={setSuchbegriff}
        serviceTypAuswahl={serviceTypAuswahl}
        setServiceTypAuswahl={setServiceTypAuswahl}
        kantonAuswahl={kantonAuswahl}
        setKantonAuswahl={setKantonAuswahl}
      />
      <Tabelle
        suchbegriff={suchbegriff}
        kantonAuswahl={kantonAuswahl}
        serviceTypAuswahl={serviceTypAuswahl}
      />
      <Footer
        setSuchbegriff={setSuchbegriff}
        setServiceTypAuswahl={setServiceTypAuswahl}
        setKantonAuswahl={setKantonAuswahl}
      />
    </div>
  );
}

export default App;
