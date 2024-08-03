import {useParams} from "react-router-dom";

const TitlePage = () => {
    const { mangaId } = useParams()
    return (
        <>
            {mangaId}
        </>
    )
}

export default TitlePage