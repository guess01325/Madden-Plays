import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { baseURL, config } from "../services";


function Plays(props) {

const deletePlays = async () =>{
  await axios.delete( `${baseURL, props.plays._id, config}`
  );
  props.setToggleFetch((prevState) => !prevState);
}
deletePlays()
  return (
    <div>
      {props.plays.map((play) => (
      
      <div key={play._id}>

        <h4>{play.fields.team}</h4>
        <h4>{play.fields.play}</h4>
        <h4>{play.fields.formation}</h4>
        <h4>{play.fields.type}</h4>
        <button onClick={deletePlays}>Delete</button>
      </div>
      
        ))}
    </div>

    
    
        
        
          

        
        
  )
}
export default Plays;
