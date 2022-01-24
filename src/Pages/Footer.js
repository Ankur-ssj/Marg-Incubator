import React from 'react';
import Handsmodel from '../Models/Handsmodel';
import {Link} from 'react-router-dom'
import '../Scss/Footer.css'
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <>
        <div className='footer_container'>
            <div className='footer_logo'>MARG INCUBATOR</div>
            <div className='footer_canvas'>
                <Handsmodel/>
            </div>
            <div className='social_handles'>
                <div className='social_header'>Follow us on.</div>
                <ul>
                    <Link to={'//www.instagram.com/'} target='_blank'><li className='list'><Icon icon="akar-icons:instagram-fill" color="white" height="40"/><span className='social_name'>Instagram</span></li></Link>
                    <Link to={'//www.instagram.com/'} target='_blank'><li className='list'><Icon icon="brandico:facebook-rect" color="white" height="40" /><span className='social_name'>Facebook</span></li></Link>
                    <Link to={'//www.instagram.com/'} target='_blank'><li className='list'><Icon icon="bx:bxl-linkedin" color="white" height="40" /><span className='social_name'>LinkedIn</span></li></Link>
                </ul>
            </div>
            <div className='footer_contact'>
                <div className='contact_header'>Contact Us</div>
                <div className='number'>+91 xxx xxxxx xx</div>
                <div className='email'>xxxx@xxxxx.com</div>
            </div>
            <p className='rights'>© Marg Incubator 2022 | All Rights Reserved</p>
        </div>
    </>
    );
};

export default Footer;
