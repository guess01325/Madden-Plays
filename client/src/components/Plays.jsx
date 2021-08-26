import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { baseURL, config } from "../services";


function Plays(props) {
const deletePlays = async () =>{
  await axios.delete(`${baseURL, props.play._id, config}`
  );
  props.setToggleFetch((prevState) => !prevState);

}
  return (
    <div >
      {props.plays.map((play) => (
      <ul>
        <li>{play.fields.team}</li>
        <li>{play.fields.play}</li>
        <li>{play.fields.formation}</li>
        <li>{play.fields.type}</li>
      </ul>
        ))}
    <div><button>Delete</button></div>
    <div><button>Delete</button></div>
    <div><button>Delete</button></div>
    <div><button>Delete</button></div>
    
        
        
          
    </div>

        
        
  )
}
export default Plays;
