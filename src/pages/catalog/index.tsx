import {lazy} from 'react'
import {useSearchParams} from "react-router-dom"
import {CatalogQueriesType} from "../../types/pagesTypes";

const Catalog = lazy(() => import("../../modules/Catalog"))

const CatalogPage = () => {
    const queries: CatalogQueriesType = {}
    const [searchParams] = useSearchParams()
    queries.tags = searchParams.getAll("tags")
    queries.year = searchParams.getAll("year")
    queries.contentRating = searchParams.getAll("contentRating")
    return (
        <main className="c_container">
            <Catalog {...queries}/>
        </main>
    )
}

export default CatalogPage