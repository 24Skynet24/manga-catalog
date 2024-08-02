import React, {lazy, useEffect} from "react"
import {Route, Routes} from "react-router-dom"
import {useCookies} from "react-cookie";

const HomePage = lazy(() => import("./pages/home"))
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
            <Routes>
                <Route index path="/" element={<HomePage/>}/>
                {/*<Route path="/page" element={<Page/>} />*/}
            </Routes>
            {/*<ScrollTopButton/>*/}
            <Footer/>
        </>
    )
}

export default App
