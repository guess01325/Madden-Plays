
import { useEffect, useState} from "react"
import { useParams} from 'react-router-dom'
import { baseURL, config } from "../services";
import axios from "axios"

function Form(props){
    const [toggleFetch, setToggleFetch] = useState(false)
    const [formation, setFormation] = useState("")
    const [team, setTeam] = useState("")
    const [ play, setPlay] = useState("")
    const [ type, setType] = useState("")
    const params = useParams()

    const handleSubmit = async (event) => {
        event.preventDefault();
        const newPlay = {
            team, 
            play,
            formation,
            type
        };
        await axios.post(
            { baseURL, config, newPlay }
        )
        props.setToggleFetch(!props.toggleFetch)

    }


   
    
    

    
 


    return(
        

       <form onSubmit = {handleSubmit}>
           <h3>Fill out to input your favorite play</h3>
           <h4>Team</h4>
           <input value={team} onChange={(e) => setTeam (e.target.value)}/>
           <h4>Play</h4>
           <input value={play} onChange={(e) => setPlay(e.target.value)}/>
           <h4>Formation</h4>
           <input value={formation} onChange={(e) => setFormation(e.target.value)}/>
           <h4>Type</h4>
           <input value={type} onChange={(e) => setType(e.target.value)}/>
           <button>Submit</button>
       </form>
       
)




           
           
           
        

};

export default Form