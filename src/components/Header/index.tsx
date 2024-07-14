import "./header.scss"
import {Link} from "react-router-dom"
import {Button} from "@mui/material";

const Header = () => {
    return (
        <header className="header">
            <div className="c_container flex-align-center flex-between">
                <Link className="logo_link" to="/">
                    <img src="./src/assets/img/Logo%201.svg" alt=""/>
                </Link>
                <nav>
                    <ul className="flex-align-center gap-12">
                        <li>test 1</li>
                        <li>test 2</li>
                        <li>test 3</li>
                    </ul>
                </nav>
                <Button className="theme_button" variant="contained" size={"large"}>Dark mode</Button>
            </div>
        </header>
    )
}

export default Header