import React, {lazy} from "react"
import {Route, Routes} from "react-router-dom"
const HomePage = lazy(() => import("./pages/home"))
const Header = lazy(() => import("./components/Header"))
const Footer = lazy(() => import("./components/Footer"))

const App: React.FC = () => {
    return (
        <>
            <Header/>
            <Routes>
                <Route index path="/" element={<HomePage/>}/>
                {/*<Route path="/page" element={<Page/>} />*/}
            </Routes>
            <Footer/>
        </>
    )
}

export default App
