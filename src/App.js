import "./App.css";
import Header from "./Header";
import Wrapper from "./Wrapper";
import Container from "./Container";
import Rules from "./Rules";
import { Provider } from "./context/Score";
import { useState } from "react";

function App() {
  const [aument, setAument] = useState(0);
  //
  function Aumnet(result) {
    if (result === "win") {
      setAument(aument + 1);
    }
  }

  return (
    <div className="App">
      <Provider
        value={{ store: aument, setStore: Aumnet  }}
      >
        <Wrapper>
          <div className="app">
            <Header />
            <Container />
            <Rules />
          </div>
        </Wrapper>
      </Provider>
    </div>
  );
}

export default App;
