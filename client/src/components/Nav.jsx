import {Link, Route} from "react-router-dom"
import "./Nav.css"






function Nav(){

    return(
       

        <Route>
            
            <div className="nav">

            <Link className="link-color" to="/">Home</Link>
            <Link className="link-color"  to="/plays" >Plays</Link>
            <Link className="link-color" to="/form">Suggest Plays</Link>
            
            </div>
        </Route>
        
    )

}
export default Nav