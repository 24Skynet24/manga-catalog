import "./scrollTopButton.scss"
import scrollToTop from "../../../utils/scrollToTop";

const ScrollTopButton = () => {
    return (
        <button className="scrollToTop_btn flex-align-center" onClick={scrollToTop}>
            <svg width="15" height="29" viewBox="0 0 15 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.96283 7.95084L4.24487 6.67L11.2278 13.6505C11.3404 13.7624 11.4297 13.8954 11.4907 14.0419C11.5516 14.1884 11.583 14.3455 11.583 14.5042C11.583 14.6629 11.5516 14.82 11.4907 14.9665C11.4297 15.1131 11.3404 15.2461 11.2278 15.3579L4.24487 22.3421L2.96404 21.0613L9.51804 14.506L2.96283 7.95084Z" fill="#222222"/>
            </svg>
        </button>
    )
}

export default ScrollTopButton