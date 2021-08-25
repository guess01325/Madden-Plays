import axios from "axios";
import React, { useState, useEffect, Fragment } from "react";
import { baseURL, config } from "../services";


function Plays(props) {
  // const [plays, setPlays] = useState([]);
  // const [toggleFetch, setToggleFetch] = useState(false)


  return (
    <div>
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
    <img src= "https://res.cloudinary.com/otisg/image/upload/v1629913944/raiders_ecewhz.jpg" alt="Raiders"/>
    <img src="https://res.cloudinary.com/otisg/image/upload/v1629913935/Packers_uhq5c8.png" alt="Packers"/>
    <img src= "https://res.cloudinary.com/otisg/image/upload/v1629913901/Cowboys_tugayu.png" alt="Cowboys"/>
    <img src="https://res.cloudinary.com/otisg/image/upload/v1629913973/cheifs_btgjvq.png" alt="Cheifs"/>
    
        
        
        
          
    </div>

        
        
  )
}
export default Plays;
