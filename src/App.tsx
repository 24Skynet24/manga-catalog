import React, {lazy, useEffect, Suspense} from "react"
import {Route, Routes} from "react-router-dom"
import {useCookies} from "react-cookie";

const HomePage = lazy(() => import("./pages/home"))
const TitlePage = lazy(() => import("./pages/title"))
const CatalogPage = lazy(() => import("./pages/catalog"))

const Loader = lazy(() => import("./components/Loader"))
const Header = lazy(() => import("./components/Header"))
const Footer = lazy(() => import("./components/Footer"))
const ScrollTopButton = lazy(() => import("./UI/Buttons/ScrollTopButton"))


const App: React.FC = () => {
    const [cookies] = useCookies(['manga_catalog_theme'])
    useEffect(() => {
        if (cookies.manga_catalog_theme === "Dark")  document.body.className = "dark_mode"
        else document.body.className = ""
    }, [cookies.manga_catalog_theme])

    return (
        <>
            <Header/>
            <Suspense fallback={<Loader/>}>
                <Routes>
                    <Route exact index path="/" element={<HomePage/>}/>
                    <Route exact path="catalog" element={<CatalogPage/>}/>
                    <Route exact path="title/:mangaId" element={<TitlePage/>}/>
                </Routes>
            </Suspense>
            {/*<ScrollTopButton/>*/}
            <Footer/>
        </>
    )
}

export default App
