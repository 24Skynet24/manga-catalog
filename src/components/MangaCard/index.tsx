import "./mangaCard.scss"
import {MangaType} from "../../types/mangaType";
import {Link} from "react-router-dom";

const MangaCard = ({id, thumb, title}: MangaType) => {
    return (
        <article className="manga_card" title={title}>
            <Link to={`/manga/${id}`}>
                <img src={thumb} alt=""/>
            </Link>
        </article>
    )
}

export default MangaCard