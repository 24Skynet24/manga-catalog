import "./mangaCard.scss"
import {MangaType} from "../../types/mangaType";
import {Link} from "react-router-dom";
import {imgUrl} from "../../utils/getImgUrl";

const MangaCard = ({id, attributes}: MangaType) => {
    return (
        <article className="manga_card" title={attributes.title.en}>
            <Link to={`/title/${id}`}>
                <div
                    className="manga_card_img"
                    style={{
                        backgroundImage: imgUrl(id, attributes.img),
                    }}
                />
            </Link>
        </article>
    )
}

export default MangaCard