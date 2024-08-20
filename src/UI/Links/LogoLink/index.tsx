import {Link} from "react-router-dom"
import "./logoLink.scss"

const LogoLink = () => {
    return (
        <Link className="logo_link" to="/">
            <img src="./src/assets/icons/Logo.svg" alt=""/>
        </Link>
    )
}

export default LogoLink