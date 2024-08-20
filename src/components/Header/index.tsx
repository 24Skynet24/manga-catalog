import "./header.scss"
import {Button} from "@mui/material";
import LogoLink from "../../UI/Links/LogoLink";
import {Link, useNavigate} from "react-router-dom";
import {useState} from "react";
import {useCookies} from "react-cookie";
import services from "../../services"


const Header = () => {
    const navigate = useNavigate();
    const [theme, setTheme] = useState("Dark")
    const [cookies, setCookie] = useCookies(['manga_catalog_theme'])
    const changeTheme = () => {
        const clName = document.body.className
        if (!clName || !cookies.manga_catalog_theme || cookies.manga_catalog_theme === "Light") {
            document.body.className = "dark_mode"
            setTheme("Dark")
            setCookie("manga_catalog_theme", "Dark")
        }
        else {
            document.body.className = ""
            setTheme("Light")
            setCookie("manga_catalog_theme", "Light")
        }
    }
    const redirectToRandom = async () => {
        const res = await services.MangaServices.getRandomManga()
        navigate(`/title/${res.id}`)
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
                            <span onClick={redirectToRandom}>Random</span>
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