import "../Assets/Plays.css";
// import Play from "../Screens/Play";
import Logo from "./Logo";

function Plays(props) {
  return (
 <>
    <div className="play-container">


      {props.plays.map((play) => (
        <div className="plays" key={play.id}>
        

          <img src={play.fields.URL} alt = "play"></img>
          <h4>{play.fields.team}</h4>
          <h4>{play.fields.play}</h4>
          <h4>{play.fields.formation}</h4>
          <h4>{play.fields.type}</h4>
          </div>
  
      ))}
      <div className="plays-logos"></div>

<Logo />
    </div>
      </>
  );
}
export default Plays;
