import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { baseURL, config } from "./services";
import Plays from "./Screens/Plays";
import Nav from "./Components/Nav";
import Form from "./Screens/Form";
import Main from "./Screens/Main";

function App() {
  const [plays, setPlays] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false);

  useEffect(() => {
    const getPlays = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setPlays(resp.data.records);
    };

    getPlays();
  }, [toggleFetch]);

  return (
    <div className="app">
      <header>
        <Nav />
      </header>

      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/form" element={<Form setToggleFetch={setToggleFetch} toggleFetch={toggleFetch} />}/>
        
        {/* <Images/> */}

        <Route path="/plays" element={<Plays plays={plays} setToggleFetch={setToggleFetch} toggleFetch={toggleFetch}/>}/>

        {/* <Images/> */}
      </Routes>
    </div>
  );
}

export default App;
