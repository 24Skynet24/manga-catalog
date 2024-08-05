import React from 'react'
import {Link} from "react-router-dom";
import "./tagCard.scss"
import {TagCardType} from "../../types/mangaType";

const TagCard = ({ url, img, name }: TagCardType) => {
    return (
        <article className="tag_card">
            <Link to={url}>
                <img src={img} alt=""/>
                <h5>{ name }</h5>
            </Link>
        </article>
    )
}

export default TagCard