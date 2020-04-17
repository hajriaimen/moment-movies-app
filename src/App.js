import React from "react";

import { GlobalProvider } from "./context/Store";

import "./App.css";
import Header from "./component/header/Header";
import CardList from "./component/card_list/CardList";

function App() {
  return (
    <GlobalProvider>
      <div className="App" style={{ position: "realative" }}>
        <Header style={{ position: "fixed" }} />
        <CardList style={{ position: "absolute" }} />
      </div>
    </GlobalProvider>
  );
}

export default App;
