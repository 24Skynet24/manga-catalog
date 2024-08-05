import {Link} from "react-router-dom"
import "./titleTag.scss"

const TitleTag = ({ tagName }) => {
    return (
        <article className="title_tag_link">
            <Link to={`/catalog?tag=${tagName}`}>
                {tagName}
            </Link>
        </article>
    )
}

export default TitleTag