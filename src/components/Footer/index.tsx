import "./footer.scss"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="c_container">
                <div className="footer_title flex flex-col gap-12">
                    <h3>
                        <Link to="/" className="flex-align-center">
                            <span>Manga</span>
                            <span>Catalog</span>
                        </Link>
                    </h3>
                    <span className="footer_title_info">
                        All data was taken from the publicly available service
                        <strong>MangaDex</strong>
                    </span>
                </div>
            </div>
        </footer>
    )
}

export default Footer