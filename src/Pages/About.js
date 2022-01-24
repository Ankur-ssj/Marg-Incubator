import React, {useRef, useEffect} from 'react';
import gsap from 'gsap'
import '../Scss/About.css'
import AboutPhotoModel from '../Models/AboutPhotoModel';

const About = () => {
  let aboutOne = useRef(null);
  let aboutTwo = useRef(null);
  let aboutThree = useRef(null);
  let aboutFour = useRef(null);
  let aboutFive = useRef(null);

  const staggerText = (node1, node2, node3) => {
      gsap.from([node1, node2, node3], {
          duration: 1,
          y: 300,
          delay: 0.1,
          ease: "circ.out",
          opacity: 0,
          stagger: {
              amount: 0.3
          },

      });
  } 

  const fadeInUp = (node1) => {
    gsap.from([node1], {
       y: 60,
       duration: 1,
       delay: 0.2,
       opacity: 0,
       ease: "circ.out",
       stagger: {
        amount: 0.3
    },
    });
} 

  useEffect(() => {
    staggerText(aboutOne, aboutTwo, aboutThree)
    fadeInUp(aboutFour)
  })

  return (
    <>
        <div className='container'>
          <div className='about_section_one'>
            <div className='about_title'>
                <h1 ref={el => (aboutOne = el)} className='about_header'>About Us</h1>
                <p ref={el => (aboutTwo = el)} className='about_header_content'>We at Marg are committed to helping individuals find their marg of excellence. We’ve been in the founder shoes and understand what it takes to build a fundamentally strong business.
                We’re India’s first incubator that provides full-stack Mobile App/Website and Marketing support as we believe that.</p>
                <p ref={el => (aboutThree = el)} className='about_cta'>Move fast, launch and learn</p>
                <div ref={el => (aboutFour = el)} className='about_canvas_one'>
                    <AboutPhotoModel/>
                </div>
            </div>
          </div>
          <div className='about_section_two'>
            <h3 className='about_section_two_header'>Our Support</h3>
            <p className='about_section_two_content'>We’ve built a network of experts who’ve been there and done that as we know what it is like to be in the founder’s shoes. Marg aims to connect entrepreneurs, investors, executives, engineers, academics, industry experts, and others in the technology ecosystem. While we like quick success, we recognise that greatness comes in many ways and at various periods. That's why we're not scared to break the norm in order to create something truly extraordinary. Beyond capital, we invest in active company creation at every step. We offer a steady hand along the voyage, particularly through the unavoidable bumps.
            Everything we do is driven by our deep grasp of markets and models, as well as our love for developing technologies and ideals. We think that by providing a fertile environment for a broad set of startups, investors, entrepreneurs, institutions, academics, and visionaries to converge, we can address the financial system's most urgent difficulties quicker, better, and for the greater good.</p>
          </div>
        </div>
    </>
    );
};

export default About;
