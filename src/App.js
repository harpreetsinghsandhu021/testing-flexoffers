import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

import flexoffers from "flexoffers";
flexoffers.init("83820991-1e9c-4ed8-b740-22b8f452215d");

function App() {
  const fetchData = async () => {
    const products = await flexoffers.products.getFullProducts({
      manufacturer: "vans",
      page: 1,
      pageSize: 20,
    });
    console.log(products);
    return products;
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
