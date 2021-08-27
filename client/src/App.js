import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, Route, useHistory } from "react-router-dom";
import { baseURL, config } from "./services/index.js";
import Plays from "./components/Plays";
import Nav from "./components/Nav";
import Images from "./components/Images";
import Form from "./components/Form"
import Play from "./components/Play"




function App() {
  
  const history = useHistory();
  const [plays, setPlays] = useState([]);
  const [toggleFetch, setToggleFetch] = useState(false)
  
  
  useEffect(() => {
    const getPlays = async () => {
      const resp = await axios.get(baseURL, config);
      console.log(resp.data.records);
      setPlays(resp.data.records);
    };

    getPlays();
  }, [toggleFetch] );
  
  
   return (
    <div className="app">
      <header>
        <Nav />
      </header>

      <Route path="/" exact>
        <h2>Own the Gridiron!</h2>
        <p>Popular Madden plays liver here! Add your play to the list if you think you got what it takes to own the Gridiron!</p>
        <button onClick={() => history.push('/plays')}>
      Click me
    </button>
        <Images/>
        
      </Route>

      <Route path="/form">
        <Form setToggleFetch={setToggleFetch} toggleFetch={toggleFetch}/>
        <Images/>
      </Route>


      <Route path="/plays">
      <Plays plays = {plays} setToggleFetch={setToggleFetch} toggleFetch={toggleFetch} />
      <Images/>
      
      
      </Route>

      
    </div>
  );
}

export default App;
