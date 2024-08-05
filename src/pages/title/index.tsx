import {useParams} from "react-router-dom"
import TitleDetails from "../../modules/TitleDetails"

const TitlePage = () => {
    const { mangaId } = useParams()
    return (
        <>
            <main className="c_container">
                <TitleDetails mangaId={mangaId}/>
            </main>
        </>
    )
}

export default TitlePage