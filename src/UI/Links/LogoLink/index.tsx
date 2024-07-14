import {Link} from "react-router-dom"
import "./logoLink.scss"

const LogoLink = () => {
    return (
        <Link className="logo_link" to="/">
            <img src="./src/assets/img/Logo%201.svg" alt=""/>
        </Link>
    )
}

export default LogoLink