import "./header.scss"
import {Button} from "@mui/material";
import LogoLink from "../../UI/Links/LogoLink";
import {Link} from "react-router-dom";
import {useState} from "react";
import services from "../../services"


const Header = () => {
    const [theme, setTheme] = useState("Dark")

    const changeTheme = () => {
        const clName = document.body.className
        if (!clName || services.LocalStorage.getTheme() === "Dark") {
            document.body.className = "dark_mode"
            setTheme("Light")
            services.LocalStorage.setTheme("Light")
        }
        else {
            document.body.className = ""
            setTheme("Dark")
            services.LocalStorage.setTheme("Dark")
        }
    }

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
                <Button className="theme_button" variant="contained" size={"large"} onClick={changeTheme}>{theme} mode</Button>
            </div>
        </header>
    )
}

export default Header