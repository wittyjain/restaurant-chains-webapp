import { useState } from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Rough from "./components/Rough/Rough";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Header />
      <Rough />
    </div>
  );
}

export default App;
