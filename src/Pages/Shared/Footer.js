import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="max-w-screen-2xl mx-auto bg-slate-10 mb-20 text-center">
      <footer className="footer p-20  content-center">
        <div>
          <span className="footer-title">SERVICES</span>
          <Link to="" className="link link-hover">Tools replacement</Link>
          <Link to="" className="link link-hover">5 Years warranty</Link>
          <Link to="" className="link link-hover">Home delivery</Link>
        </div>
        
         
      </footer>
      <div className="mt-10 text-center">
        <p>Copyright © 2022 <br /> All right reserved by HiKOKI Co.</p>
      </div>
    </div>
  );
};

export default Footer;
