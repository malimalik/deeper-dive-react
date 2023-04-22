import React, { useState } from "react";

import "./App.css";
import Button from "./components/UI/Button/Button";
import Demo from "./components/Demo/Demo"

function App() {
  const [showPara, setShowPara] = useState(false);

  const showParagraph = () => {
    setShowPara((prevShowPara) => !prevShowPara);
  };

  const btnText = showPara ? "Hide Para" : "Show Para";
  return (
    <div className="app">
      <h1>Hi there!</h1>
      <Demo show={showPara}></Demo>
      <Button className={"hello"} onClick={showParagraph}>
        {btnText}
      </Button>
    </div>
  );
}

export default App;
