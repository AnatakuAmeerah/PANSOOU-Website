import './navbar.css'
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef, useState } from 'react';
import { Link } from 'react-scroll';
function Navbar() {
    const navRef = useRef();
    const [activeSection, setActiveSection] = useState(""); // Add a state to track the active section

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };
    const hideNavbar = () => {
        navRef.current.classList.remove("responsive_nav");
    };
    const [isImageEnlarged, setIsImageEnlarged] = useState(false);

    const handleImageClick = () => {
        setIsImageEnlarged(!isImageEnlarged);
    };

    // Add an event listener to the window scroll event
    window.addEventListener("scroll", () => {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll("section");

        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                setActiveSection(section.id); // Update the active section state
            }
        });
    });
    // const navRef = useRef();
    // // function to open and close navbar when btn is clicked
    // const showNavbar = () => {
    //     navRef.current.classList.toggle(
    //         "responsive_nav"
    //     );
    // };
    // // const hideNavbar = () => {
    // //     navRef.current.classList.remove(
    // //         "responsive_nav"
    // //     );
    // // };

    // // function to close navbar when a link is clicked and scroll to the section specified
    // const handleClick = (e) => {
    //     e.preventDefault()
    //     const target = e.target.getAttribute('href')
    //     const location = document.querySelector(target).offsetTop


    //     window.scrollTo({
    //         left: 0,
    //         top: location - 120,
    //     })
    //     navRef.current.classList.remove(
    //         "responsive_nav"
    //     );
    // }
    return (
        <>
            <nav>
                <div className='logo'>
                    <img src='./PANS OOU LOGO transparent-1 1 (3).svg' className="logopans" alt="Pans logo" />
                    <p>PANSOOU</p>
                </div>
                <div className="nav-container-2" ref={navRef}>
                    <ul>
                        {/* <a className="navv-linkk" href="#home" onClick={handleClick}>
                        <li className="nav-link-li">Home</li>
                    </a> */}
                        <li>
                            <Link
                                onClick={hideNavbar}
                                activeClass="active"
                                to="home"
                                spy={true}
                                smooth="true"
                                offset={-70}
                                duration={700}
                                className={activeSection === "home" ? "active" : ""}
                            >
                                Home
                            </Link>
                        </li>
                        {/* <a className="navv-linkk" href="#Complaint box" onClick={handleClick}>
                        <li className="nav-link-li">Complaint box</li>
                    </a> */}
                        <li>
                            <Link
                                onClick={hideNavbar}
                                activeClass="active"
                                to="complaint box"
                                spy={true}
                                smooth="true"
                                offset={-70}
                                duration={700}
                                className={activeSection === "complaint box" ? "active" : ""}
                            >
                                Complaint box
                            </Link>
                        </li>
                        {/* <a className="navv-linkk" href="PDF Resources" onClick={handleClick}>
                        <li className="nav-link-li">PDF Resources</li>
                    </a> */}
                        <li>
                            <Link
                                onClick={hideNavbar}
                                activeClass="active"
                                to="pdf resources"
                                spy={true}
                                smooth="true"
                                offset={-150}
                                duration={700}
                                className={activeSection === "pdf resources" ? "active" : ""}
                            >
                                PDF Resources
                            </Link>
                        </li>
                        {/* <a className="navv-linkk" href="FAQ" onClick={handleClick}>
                        <li className="nav-link-li">FAQ</li>
                    </a> */}
                        <li>
                            <Link
                                onClick={hideNavbar}
                                activeClass="active"
                                to="faq"
                                spy={true}
                                smooth="true"
                                offset={-70}
                                duration={700}
                                className={activeSection === "faq" ? "active" : ""}
                            >
                                FAQ
                            </Link>
                        </li>
                        {/* <a className="navv-linkk" href="Contact us" onClick={handleClick}>
                        <li className="nav-link-li">Contact us</li>
                    </a> */}
                        <li>
                            <Link
                                onClick={hideNavbar}
                                activeClass="active"
                                to="contact us"
                                spy={true}
                                smooth="true"
                                offset={-70}
                                duration={700}
                                className={activeSection === "contact us" ? "active" : ""}
                            >
                                Contact us
                            </Link>
                        </li>
                    </ul>
                    {/* opens the navbar */}
                    <button
                        className="nav-btn nav-close-btn"
                        onClick={showNavbar}>
                        <FaTimes />
                    </button>
                </div>
                {/* closes the navbar */}
                <button
                    className="nav-btn"
                    onClick={showNavbar}>
                    <FaBars />
                </button>
            </nav>
        </>
    )
}
export default Navbar