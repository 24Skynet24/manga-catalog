import "./header.scss"
import {Button} from "@mui/material";
import LogoLink from "../../UI/Links/LogoLink";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <header className="header">
            <div className="c_container flex-align-center flex-between">
                <LogoLink/>
                <nav>
                    <ul className="flex-align-center gap-12">
                        <li>
                            <Link to="/catalog">Catalog</Link>
                        </li>
                        <li>
                            <Link to="/catalog">Latest</Link>
                        </li>
                        <li>
                            <span>Search</span>
                        </li>
                    </ul>
                </nav>
                <Button className="theme_button" variant="contained" size={"large"}>Dark mode</Button>
            </div>
        </header>
    )
}

export default Header