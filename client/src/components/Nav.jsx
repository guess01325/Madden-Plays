import {Link, Route} from "react-router-dom"





function Nav(){

    return(
        <Route>

            <Link to="/">Home</Link>
            <Link to="/plays">Plays</Link>
            <Link to="/form">Suggest Plays</Link>
        </Route>
    )

}
export default Nav