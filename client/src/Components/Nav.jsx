import {Link} from "react-router-dom"
import "../Assets/Nav.css"






function Nav(){

    return(
       

    
            
            <div className="nav">

            <Link to="/">Home</Link>
            <Link to="/plays" >Plays</Link>
            <Link to="/form">Suggest Plays</Link>
            
            </div>
    
        
    )

}
export default Nav