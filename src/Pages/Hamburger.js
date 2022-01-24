import React, {useEffect, useRef} from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import '../Scss/Header.css'
import sampleimg from '../Images/sampleimg.png'


const images = [
    {name: "sample1", image: sampleimg},
    {name: "sample2", image: sampleimg},
    {name: "sample3", image: sampleimg},
    {name: "sample4", image: sampleimg},
    {name: "sample5", image: sampleimg}
]



const Hamburger = ({state}) => {

    let menu = useRef(null);
    let revealMenu = useRef(null);
    let revealMenuBackground = useRef(null);
    let imageBackground = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    let info = useRef(null);

    
    
    useEffect(() => {
        if(state.clicked === false) {
            //close our menu
            gsap.to([revealMenu, revealMenuBackground], {
                duration: 0.8,
                height: 0,
                ease: "power3.inOut",
                stagger: {
                    amount: 0.07
                }
            });
            gsap.to(menu, {
                duration: 1,
                css: {display: "none"}
            });
        } else if (state.clicked === true || 
            state.clicked === true && state.initial === null) {
            //open our menu
            gsap.to(menu, {
                duration: 0,
                css: {display: "block"}
            });
            gsap.to([revealMenuBackground, revealMenu], {
                duration: 0,
                opacity: 1,
                height: "100%"
            });
            staggerReveal(revealMenuBackground, revealMenu);
            fadeInUp(info);
            staggerText(line1, line2, line3, line4);
        }
    }, [state]);


    const staggerReveal = (node1, node2) => {
        gsap.from([node1, node2], {
            duration: 0.8,
            height: 0,
            transformOrigin: "right top",
            skewY: 2,
            ease: "power3.inOut",
            stagger: {
                amount: 0.1
            }
        })
    } 

    const fadeInUp = (node) => {
        gsap.from(node, {
           y: 60,
           duration: 1,
           delay: 0.2,
           opacity: 0,
           ease: "power3.inOut"
        });
    } 

    const staggerText = (node1, node2, node3, node4) => {
        gsap.from([node1, node2, node3, node4], {
            duration: 0.8,
            y: 100,
            delay: 0.1,
            ease: "power3.inOut",
            stagger: {
                amount: 0.3
            }
        });
    } 

    const handleImage = image => {
        gsap.to(imageBackground, {
            duration: 0,
            background: `url(${image}) center center`
        });
        gsap.to(imageBackground, {
            duration: 0.4,
            opacity: 1,
            ease: "power3.inOut"
        });
        gsap.from(imageBackground, {
            duration: 0.4,
            skewY: 2,
            transformOrigin: "right top"
        });
    };

    const handleImageReturn = () =>{
        gsap.to(imageBackground, {
            duration: 0.4,
            opacity: 0
        });
    };

    const handleHover = e => {
        gsap.to(e.target , {
            duration: 0.3,
            y: 3,
            skewX: 4,
            ease: "power3.inOut"
        });
    };

    const handleHoverExit = e => {
        gsap.to(e.target, {
            duration: 0.3,
            y: -3,
            skewX: 0,
            ease: "Pwer3.inOut"
        })
    }

    return (
        <div ref={el => (menu = el)} className='hamburger-menu'>
            <div ref={el => (revealMenuBackground = el)} className='menu-secondary-background-color'></div>
            <div ref={el => (revealMenu = el)} className='menu-layer'>
                <div ref={el => (imageBackground = el)} className='menu-image-background'></div>
                <div className='container'>
                    <div className='wrapper'>
                        <div className='menu-links'>
                            <nav>
                                <ul>
                                    <li>
                                        <Link 
                                        onMouseEnter={e => handleHover(e)} 
                                        onMouseOut={e => handleHoverExit(e)} 
                                        ref={el => (line1 = el)} to='/Home'>Home</Link>
                                    </li>
                                    <li>
                                        <Link 
                                        onMouseEnter={e => handleHover(e)} 
                                        onMouseOut={e => handleHoverExit(e)} 
                                        ref={el => (line2 = el)} to='/About'>About Us</Link>
                                    </li>
                                    <li>
                                        <Link
                                        onMouseEnter={e => handleHover(e)} 
                                        onMouseOut={e => handleHoverExit(e)}
                                         ref={el => (line3 = el)} to='/WorkingSpace'>Work Space</Link>
                                    </li>
                                    <li>
                                        <Link
                                        onMouseEnter={e => handleHover(e)} 
                                        onMouseOut={e => handleHoverExit(e)}
                                         ref={el => (line4 = el)} to='/Vision'>Our Vision</Link>
                                    </li>
                                </ul>
                            </nav>

                            <div ref={el => (info = el)} className='info'>
                                <h3>Our Promise</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                            </div>

                            <div className='samples'>
                                Samples:
                                {images.map(el => (
                                    <span key={el.name} onMouseEnter={() => handleImage(el.image)} onMouseOut={handleImageReturn}>{el.name}</span>
                                ))}
                                
                            </div>
                        </div>
                    </div>
                    <div>
                            
                            </div>
                </div>
            </div>   
        </div>
    )
}

export default Hamburger
