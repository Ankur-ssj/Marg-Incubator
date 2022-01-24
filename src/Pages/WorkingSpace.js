import React, {useEffect, useRef,Suspense} from 'react'
import WorkingSpaceModel from '../Models/WorkingSpaceModel'
import '../Scss/Workingspace.css'
import gsap from 'gsap'


const WorkingSpace = () => {

    let wsOne = useRef(null);
    let wsTwo = useRef(null);
    let wsThree = useRef(null);
    let wsFour = useRef(null);
    let wsModel = useRef(null);

    const staggerText = (node1, node2, node3) => {
        gsap.from([node1, node2, node3], {
            duration: 1,
            y: 200,
            delay: 0.1,
            ease: "circ.out",
            opacity: 0,
            stagger: {
                amount: 0.3
            },

        });
    } 

    useEffect(() => {
        staggerText(wsOne, wsTwo, wsThree);
    })

    return (
        <>
        <div className='container'>
            <div className='ws_section_one'>
                <div className='ws_canvas_one'>
                    <WorkingSpaceModel/>
                </div>
                <div className='ws_heading_one'>
                    <h1 ref={el => (wsOne = el)} className='ws_header'>Working <span><br/></span> Space</h1>
                    <p ref={el => (wsTwo = el)} className='ws_heading_info'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. \
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, 
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                    <p ref={el => (wsThree = el)} className='cta'>Click here to fuel your dreams.</p>
                </div>
            </div>
        </div>
        </>
    )
}

export default WorkingSpace
