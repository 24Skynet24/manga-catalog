import "./mangaCard.scss"
import {MangaType} from "../../types/mangaType";
import {Link} from "react-router-dom";

const MangaCard = ({id, attributes}: MangaType) => {
    const imgUrl: string = `url(https://uploads.mangadex.org/covers/${id}/${attributes.img})`
    return (
        <article className="manga_card" title={attributes.title.en}>
            <Link to={`/title/${id}`}>
                <div
                    className="manga_card_img"
                    style={{
                        backgroundImage: imgUrl,
                    }}
                />
            </Link>
        </article>
    )
}

export default MangaCard