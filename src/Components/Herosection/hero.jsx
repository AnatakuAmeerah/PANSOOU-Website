import './hero.css'
import Navbar from '../navBar';
import { HiExternalLink } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Contact from '../MessageBox/messageBox';
// import SimpleSlider from '../MessageBox/messageBox';
// import Responsive from '../MessageBox/messageBox';

function Hero() {
    return (
        <>
            <Navbar />
            {/* section 1 */}
            <section className="bg-grid" id='home'>
                <div className='cta'>
                    <h1> AT PANSOOU THE WELL BEING OF PANSITES IS OUR FIRST <br /> PRIORITY</h1>
                    <h3>PANSOOU is committed to providing a safe inclusive and supportive space  for Pansites.</h3>
                </div>
            </section>

            {/* section 2 */}
            <section>
                <h4 className=' about-us'>ABOUT PANSOOU</h4>
                <p className='about-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sequi quibusdam eveniet quisquam molestiae, exercitationem facilis porro illum dolorum sunt similique temporibus hic autem veritatis ipsum, quam vel, facere laborum!</p>
            </section>

            {/* section 3 */}
            <section className='msg-section' id='complaint box'>
                <h4 className='your-voice'>YOUR VOICE MATTERS</h4>
                <p className='your-message'>we're here to listen and help. </p>
                <Contact />
                <p className='your-message'>Your message will remain confidential and will be worked on. </p>
            </section>

            {/* section 4 */}
            <section className='pdf-section' id='pdf resources'>
                <h4>IMPORTANT RESOURCES</h4>
                <p>Acess all the PDFs for your academic and general wellbeing</p>
                <div className='pdf-box'>
                    <a href="https://bit.ly/500L_pharmacy" target="_blank" rel="noopener noreferrer">
                        <div className='pdf'>
                            <p className='pdf-p2'>500L <HiExternalLink /></p>

                        </div>
                    </a>
                    <a href="https://drive.google.com/folderview?id=12vBivNGWbSUZ-iYQT_yuwvUsMicU7HUL" target="_blank" rel="noopener noreferrer">
                        <div className='pdf'>
                            <p className='pdf-p2'>400L <HiExternalLink /></p>
                        </div>
                    </a>
                    <a href="https://drive.google.com/drive/folders/1ziHjgdSZ4RAb5-OiyLHS7leVXWT2YpXm" target="_blank" rel="noopener noreferrer">
                        <div className='pdf'>
                            <p className='pdf-p2'>300L <HiExternalLink /></p>
                        </div>
                    </a>
                    <a href="https://drive.google.com/drive/folders/1TAs_ENZuPpdSN106_pwU1CD_NA-HvbxA" target="_blank" rel="noopener noreferrer">
                        <div className='pdf'>
                            <p className='pdf-p2'>200L <HiExternalLink /></p>
                        </div>
                    </a>
                    <a href="https://drive.google.com/drive/folders/1TLsGByo7hmaCwfWIHwng_dgCzQ0z5KkL" target="_blank" rel="noopener noreferrer">
                        <div className='pdf'>
                            <p className='pdf-p2'>100L <HiExternalLink /></p>
                        </div>
                    </a>
                </div>
            </section>

            {/* section 5 */}
            <div className="faq-content" id='faq'>
                <h4 className='faq'>FAQs</h4>
                <p className='some'>Some of your questions are answered here</p>
                <details>
                    <summary>
                        How much is PANS due?
                    </summary>
                    <p className="summary-p">
                        Pans due is 6000 for 100L , 4,500 for 200L, 4000 for 300L, 3,500 for 400L and 3000 for 500L.
                    </p>
                </details>
                <details>
                    <summary>
                        How does the PANSOOU dress code work?
                    </summary>
                    <p className="summary-p">

                    </p>
                </details>
                <details>
                    <summary>
                        Who is the dean of the faculty of pharmacy?
                    </summary>
                    <p className="summary-p">
                        The dean of the faculty of pharmacy is Prof. Adebayo Lamikanra.
                    </p>
                </details>
                <details>
                    <summary>
                        Can i attend Congress even though im not an Executive?
                    </summary>
                    <p className="summary-p">
                        Yes, Congress if for all pansites
                    </p>
                </details>
                <details>
                    <summary>
                        Who is the current PANS president?
                    </summary>
                    <p className="summary-p">
                        The current PANS president is Gbadamosi Marvelous.
                    </p>
                </details>
            </div>

            {/* section 6 */}
            <section className='footer' id='contact us'>
                <div className='footer-content'>
                    <div className='logo2'>
                        <img src='./PANS OOU LOGO transparent-1 1 (3).svg' className="logopans2" alt="Pans logo" />
                        <p>PANSOOU</p>
                    </div>
                    <div className='contact'>
                        <div className=''>
                            <h5>Contact us</h5>
                            <div className='contacts'>
                                <div>
                                    <p>Gbadamosi Marvellous</p>
                                    <span>PRESIDENT</span>
                                    <p>09038993613</p>
                                </div>
                                <div>
                                    <p>Ogenetega Jones</p>
                                    <span>VICE PRESIDENT</span>
                                    <p>09022245981</p>
                                </div>
                                <div>
                                    <p>Gbadamosi Emmanuel</p>
                                    <span>GENERAL SECRETARY</span>
                                    <p>07048023761</p>
                                </div>
                                <div>
                                    <p>Anataku Ameerah</p>
                                    <span>ASS. GEN. SECRETARY</span>
                                    <p>08152520047</p>
                                </div>
                                <div>
                                    <p>Osatimehin Woleoluwa</p>
                                    <span>FINANCIAL SECRETARY</span>
                                    <p>08135489223</p>
                                </div>
                                <div>
                                    <p>Onifade Bolaji</p>
                                    <span>TREASURER</span>
                                    <p>08105312802</p>
                                </div>
                            </div>
                        </div>
                        <div className='contacts  contacts2'>
                            <div>
                                <p>Oyekunle Boluwatife</p>
                                <span>PUBLIC RELATIONS OFFICER</span>
                                <p>09120881742</p>
                            </div>
                            <div>
                                <p>Ajibola Boluwatife</p>
                                <span>WELFARE DIRECTOR</span>
                                <p>09020937941</p>
                            </div>
                            <div>
                                <p>Adealao Mariam</p>
                                <span>EDITOR-IN-CHIEF</span>
                                <p>09014605487</p>
                            </div>
                            <div>
                                <p>Adefulu Enoch</p>
                                <span>SPORT DIRECTOR</span>
                                <p>07032534964</p>
                            </div>
                            <div>
                                <p>Adenaike Adedamola</p>
                                <span>SOCIAL DIRECTOR</span>
                                <p>09122743610</p>
                            </div>
                        </div>


                    </div>
                    <div className='contact1'>
                        <div>
                            <h5>Resources</h5>
                            <p>Pharmacy Handbook</p>
                            <p>The Constitution</p>
                        </div>

                        <div>
                            <h5>Our socials</h5>
                            <div className='socials'><FaLinkedin className='social-icons' />LinkedIn</div>
                            <div className='socials'> <FaSquareXTwitter className='social-icons' />Instagram</div>
                            <div className='socials'><FaInstagramSquare className='social-icons' /> Twitter</div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Hero;