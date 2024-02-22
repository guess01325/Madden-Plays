import {Link} from "react-router-dom"
import "../Assets/Nav.css"






function Nav(){

    return(
       

    
            
            <div className="nav">

            <Link className="link-color" to="/">Home</Link>
            <Link className="link-color"  to="/plays" >Plays</Link>
            <Link className="link-color" to="/form">Suggest Plays</Link>
            
            </div>
    
        
    )

}
export default Nav