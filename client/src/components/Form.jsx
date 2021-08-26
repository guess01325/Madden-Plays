
import { useEffect, useState} from "react"
import { useParams} from 'react-router-dom'
import { baseURL, config } from "../services";
import axios from "axios"

function Form(props){
    
    const [formation, setFormation] = useState("")
    const [team, setTeam] = useState("")
    const [ play, setPlay] = useState("")
    const [ type, setType] = useState("")
    const params = useParams()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPlay = {
            fields:{

                team, 
                play,
                formation,
                type
            }
        };
        console.log(newPlay)
         axios.post(
             baseURL, newPlay, config  
        )
        props.setToggleFetch(!props.toggleFetch)

    }


   
    
    

    
 


    return(
        

       <form class="form" onSubmit = {handleSubmit}>
           <h3>Fill out to input your favorite play</h3>
           <h4>Team</h4>
           <input class="input" value={team} onChange={(e) => setTeam (e.target.value)}/>
           <h4>Play</h4>
           <input class="input" value={play} onChange={(e) => setPlay(e.target.value)}/>
           <h4>Formation</h4>
           <input class="input" value={formation} onChange={(e) => setFormation(e.target.value)}/>
           <h4>Type</h4>
           <input class ="input" value={type} onChange={(e) => setType(e.target.value)}/>
           <button type="Submit">Submit</button>
       </form>
       
)




           
           
           
        

};

export default Form