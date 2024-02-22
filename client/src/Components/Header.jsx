import {Link} from "react-router-dom"
import "../Assets/Nav.css"
import "../Assets/Header.css"






function Header(){

    return(
       

    
            
            <div className="nav">

            <Link className="nav-link" href="/" to="/">Home</Link>
            <Link className="nav-link" to="/plays" >Plays</Link>
            <Link className="nav-link" to="/form">Suggest Plays</Link>
            
            </div>
    
        
    )

}
export default Header