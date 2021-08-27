
import "./Plays.css"
import Play from "./Play"
import {useEffect} from "react"


function Plays(props) {


  return (
    <div className="plays-container">
      {props.plays.map((play) => (
       <Play setToggleFetch={props.setToggleFetch}   play={play} />
      ))}
    </div>
  );
}
export default Plays;