import "../Assets/Plays.css";
// import Play from "../Screens/Play";
import Logo from "./Logo";

function Plays(props) {
  return (
 <>
    <div className="play-container">
      {props.plays.map((play) => (
        <div key={play.id}>
          <div className="plays">

          <img src={play.fields.URL} alt = "play"></img>
          <h4>{play.fields.team}</h4>
          <h4>{play.fields.play}</h4>
          <h4>{play.fields.formation}</h4>
          <h4>{play.fields.type}</h4>
          </div>
        </div>
      ))}

    </div>
<Logo />
      </>
  );
}
export default Plays;
