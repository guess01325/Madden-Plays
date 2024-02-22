import {Link} from "react-router-dom"
import "../Assets/Nav.css"






function Header(){

    return(
       

    
            
            <>

            <Link href="/" to="/">Home</Link>
            <Link to="/plays" >Plays</Link>
            <Link to="/form">Suggest Plays</Link>
            
            </>
    
        
    )

}
export default Header