import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { baseURL, config } from "../services";


function Plays(props) {

const deletePlays = async () =>{
  await axios.delete(`${baseURL}${props.plays.id}`,config)
  
  props.setToggleFetch((prevState) => !prevState);
}

  return (
    <div>
      {props.plays.map((play) => (
        <div key={props.plays.id}>
          <h4>{play.fields.team}</h4>
          <h4>{play.fields.play}</h4>
          <h4>{play.fields.formation}</h4>
          <h4>{play.fields.type}</h4>
          <img src={play.fields.URL}></img>
           <button onClick={async () => {
              await axios.delete(`${baseURL}${play.id}`, config);

              props.setToggleFetch((prevState) => !prevState);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}
export default Plays;