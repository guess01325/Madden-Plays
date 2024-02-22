
import "../Assets/Plays.css"
import Play from "../Screens/Play"
import Logo from "./Logo";



function Plays(props) {


  return (
    <div className="plays-container">
      {props.plays.map((play) => (
      //  <Play setToggleFetch={props.setToggleFetch}   play={play} />
      ))}
          
        <Logo/>

      

    </div>
  );
}
export default Plays;