import { useState } from "react";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <Header />
    </div>
  );
}

export default App;
