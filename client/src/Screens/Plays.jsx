
import "../Assets/Plays.css"
import Play from "../Screens/Play"
import Images from "./Images";



function Plays(props) {


  return (
    <div className="plays-container">
      {props.plays.map((play) => (
       <Play setToggleFetch={props.setToggleFetch}   play={play} />
      ))}
                <Images/>

    </div>
  );
}
export default Plays;