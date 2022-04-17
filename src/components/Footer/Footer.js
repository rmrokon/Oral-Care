import React from 'react';
import { LocationMarkerIcon, OfficeBuildingIcon, PhoneIcon } from '@heroicons/react/solid';
import Logo from '../../images/logo.png';
import Facebook from '../../images/Social/facebook.png';
import Twitter from '../../images/Social/twitter.png';
import Insta from '../../images/Social/insta.png';
import './Footer.css'
import useDate from '../../Utilities/useDate';



const Footer = () => {
    const year = useDate();
    return (
        <div className='container-fluid bg-light'>
            <div className='container'>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-12 col-lg-3'>
                        <img src={Logo} alt="" />
                    </div>
                    <div className='w-50 col-12 col-lg-3'>
                        <p className='fs-5'><LocationMarkerIcon className='hero-icon-footer'></LocationMarkerIcon> 163/3 Shewrapara, Mirpur, Dhaka-1208</p>
                        <p className='fs-5'><PhoneIcon className='hero-icon-footer'></PhoneIcon> +38424723</p>
                    </div>
                    <div className='col-12 col-lg-3'>
                        <div className='social d-flex'>
                            <a href="https://facebook.com"><img src={Facebook} alt="" /></a>
                            <a href="https://twitter.com"><img src={Twitter} alt="" /></a>
                            <a href="https://instagram.com"><img src={Insta} alt="" /></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className='copyright'><p className='text-center'>Copyright <i className="fas fa-copyright"></i> {year}</p></div>
        </div>
    );
};

export default Footer;