import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { baseURL, config } from "../services";
import axios from "axios";
import "../Assets/Form.css";

function Form(props) {
  const [formation, setFormation] = useState("");
  const [team, setTeam] = useState("");
  const [play, setPlay] = useState("");
  const [type, setType] = useState("");
  const params = useParams();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newPlay = {
      fields: {
        team,
        play,
        formation,
        type,
      },
    };
    console.log(newPlay);
    axios.post(baseURL, newPlay, config);
    props.setToggleFetch(!props.toggleFetch);
  };

  return (
    <form class="form-container" onSubmit={handleSubmit}>
      <h3 className="form-input">Fill out to input, your favorite Plays</h3>
      <h4 className="form-input">Team</h4>
      <input
        class="form-input"
        value={team}
        onChange={(e) => setTeam(e.target.value)}
      />
      <h4 className="form-input">Play</h4>
      <input
        class="form-input"
        value={play}
        onChange={(e) => setPlay(e.target.value)}
      />
      <h4 className="form-input">Formation</h4>
      <input
        class="input"
        value={formation}
        onChange={(e) => setFormation(e.target.value)}
      />
      <h4 className="form-input">Type</h4>
      <input
        class="input"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <button className="submit-button" type="Submit">Submit</button>
    </form>
  );
}

export default Form;
