import React from 'react';

const Footer = () => {
    return (
        
        <footer className=" bg-base-200 ">
            <div className='footer pt-20 container mx-auto'>
                <div>
                    <a href="#top" className="footer-logo">Doctor Bari</a>
                    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
                </div> 
                <div>
                    <span className="footer-title">Services</span> 
                    <a href="#top" className="link link-hover">Branding</a> 
                    <a href="#top" className="link link-hover">Design</a> 
                    <a href="#top" className="link link-hover">Marketing</a> 
                    <a href="#top" className="link link-hover">Advertisement</a>
                </div> 
                <div>
                    <span className="footer-title">Company</span> 
                    <a href="#top" className="link link-hover">About us</a> 
                    <a href="#top" className="link link-hover">Contact</a> 
                    <a href="#top" className="link link-hover">Jobs</a> 
                    <a href="#top" className="link link-hover">Press kit</a>
                </div> 
                <div>
                    <span className="footer-title">Legal</span> 
                    <a href="#top" className="link link-hover">Terms of use</a> 
                    <a href="#top" className="link link-hover">Privacy policy</a> 
                    <a href="#top" className="link link-hover">Cookie policy</a>
                </div>
            </div>
            <div className='text-center bg-base-200 text-base-content pt-10 pb-2'>
                <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer>
     
    );
};

export default Footer;