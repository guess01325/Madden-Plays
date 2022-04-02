
import "../Assets/Plays.css"
import Play from "../Screens/Play"



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