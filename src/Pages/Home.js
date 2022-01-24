import React from 'react'
import Sample from '../Models/Sample'
import '../Scss/landing.css'
import NodCharacter from '../Models/NodCharacter'
import LookingCharacter from '../Models/LookingCharacter'


const Home = () => {

    return (
        <>
        <div className='container'>
        <div className='title'>
                <h1>Your <span className='part_one'>Dream.</span></h1>
                <div className='header_two'>
                    <h1>Our <span className='part_two'>Support</span></h1>
                </div>
            </div>
        <div className='section_one'>
            <div className='canvas'>
                <Sample />
            </div>
            </div>
            <div className='section_two'>
                <div className='canvas_two'>
                    <NodCharacter/>
                </div>
                <div className='info_section_two'>
                    <h3 className='second_heading'>What we do.</h3>
                    <p className='second_info'>
                        Marg Incubator invites all budding entrepreneurs with a vision to change the world. 
                        We're a Sector Agnostic incubator with the vision to back entrepreneurs building the future through technology or other enablers.We've built a network of experts 
                        who've been there and done that as we know what it is like to be in the founder's shoes. Marg aims to connect entrepreneurs, investors, executives, engineers, academics, industry experts, 
                        and others in the technology ecosystem.
                    </p>
                    <p className='form_link'>Let's create the future and make history together.</p>
                </div>
            </div>
            <div className='section_three'>
                <div className='canvas_three'>
                    <LookingCharacter/>
                </div>
                <div className='info_section_three'>
                    <h3 className='third_heading'>What's in it for you?</h3>
                    <div className='third_info'>
                        <ul>
                            <li>Affordable workspace as per your convenience.</li>
                            <li>Unlimited high-speed internet</li>
                            <li>Super duper Mentors - been there, done that</li>
                            <li>Access to in-house Lawyers and CAs</li>
                            <li>Investor support</li>
                            <li>Inhouse Technology and digital marketing support</li>
                        </ul>
                        <p>Start working at the nearest cafe around you at just INR 4000 per seat per month</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Home 
