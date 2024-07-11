import {Route, Routes} from "react-router-dom"
import HomePage from "./pages/home"

const App = () => {
    return (
        <>
            <Routes>
                <Route index path="/" element={<HomePage/>}/>
                {/*<Route path="/page" element={<Page/>} />*/}
            </Routes>
        </>
    )
}

export default App
