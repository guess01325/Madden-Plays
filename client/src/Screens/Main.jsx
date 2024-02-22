import {Link} from "react-router-dom"
import Images from "./Images";



function Main(props) {
  
      
       
   

  return (
    <div className="main">
        <h2 id="title">Own the Gridiron!</h2>
        <p id="title-description">Popular Madden plays liver here! Add your play to the list if you think you got what it takes to own the Gridiron!</p>
        <Link to ={`/form`}>Start Here</Link>
                  <Images/>


          
        </div>
  );
}
export default Main;