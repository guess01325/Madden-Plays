import { Link } from "react-router-dom";
import "../Assets/Main.css";
import Logo from "./Logo";

function Main(props) {
  return (
    <div className="main">
      <h2>Own the Gridiron!</h2>
      <p>
        Popular Madden plays liver here! Add your play to the list if you think
        you got what it takes to own the Gridiron!
      </p>
      <Link className="start-link" to={`/form`}>Start Here</Link>
     <Logo/>
    </div>
  );
}
export default Main;
