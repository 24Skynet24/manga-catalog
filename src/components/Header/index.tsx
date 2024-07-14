import "./header.scss"
import {Button} from "@mui/material";
import LogoLink from "../../UI/Links/LogoLink";

const Header = () => {
    return (
        <header className="header">
            <div className="c_container flex-align-center flex-between">
                <LogoLink/>
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