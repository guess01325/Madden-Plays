import axios from 'axios'
import React, { useState, useEffect } from "react"
import { baseURL, config } from "../services";




function Plays(props){
 
  
    const [ plays, setPlays ] = useState([])
    const [ formation, setFormation] = useState("")
    const [ team, setTeam ] = useState ("")
    const [ play, setPlay ] = useState ("")
    const [ type, setType ] = useState ("")
    
    useEffect(() => {
      const getPlays = async () =>{
        const resp = await axios.get(baseURL, config)
        setPlays(resp.data.records)
        console.log(resp.data.records)
        // setTeam(resp.data.records.fields)
        // setFormation(resp.data.records.fields.formation)
        // setPlay(resp.data.records.fields.play)
        // setType(resp.data.records.fields.type)
        
        
  
  
        
      }
      
      getPlays()
    }, []);


    return (
      

<div>

  {plays.map((play, index) =>(
    <h1>{play.fields.name}</h1>
     
  ))}
</div>




    )


  
     
   
      



                
                
                
              
            
    }

export default Plays;
       




