import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';

const HeaderModel = () => {
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const isProductRoute = () => {
        return (
            location.pathname === '/product' ||
            location.pathname === '/aqua-atp' ||
            location.pathname === '/surface-atp' ||
            location.pathname === '/surface-protein' ||
            location.pathname === '/reporting-software' ||
            location.pathname === '/transport-kit-ATP' ||
            location.pathname === '/viral-transport-medium' ||
            location.pathname === '/sterile-nasal-flocked-swab' ||
            location.pathname.startsWith('/product-detail')
        );
    };

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    const closeDropdown = () => {
        setIsDropdownOpen(false);
    };
    return (
        <div>
            <header className={`${location.pathname === '/contactUs' || location.pathname === '/viral-transport-medium' || location.pathname === '/sterile-nasal-flocked-swab' || location.pathname === '/aqua-atp' || location.pathname === '/surface-atp' || location.pathname === '/transport-kit-ATP' || location.pathname === '/reporting-software' || location.pathname === '/surface-protein' || location.pathname === '/product-detail' ? 'white_header' : ''}`}>
                {/* <header> */}
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="navbar navbar-expand-lg p-0">
                                <Link to='/' className="navbar-brand">

                                    <>
                                        <img src="images/logo.png"
                                            className="d-lg-block d-md-block d-none" alt="Logo" />
                                        <img src="images/mobile_dark_logo.png"
                                            className="d-lg-none d-md-none d-block" alt="Logo" />
                                    </>
                                </Link>
                                <button className="navbar-toggler" type="button"
                                    onClick={toggleDropdown}
                                    // data-bs-toggle="collapse"
                                    // data-bs-target="#navbarSupportedContent"
                                    aria-controls="navbarSupportedContent"
                                    aria-expanded={isDropdownOpen ? 'true' : 'false'}
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon">

                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                            <path d="M13.7999 19.2H2.3999M21.5999 12H2.3999M21.5999 4.79999H2.3999" stroke="#000552" stroke-width="2" stroke-linecap="round" />
                                        </svg>
                                    </span>
                                </button>
                                <div className={`collapse navbar-collapse ${isDropdownOpen ? 'show' : ''}`}
                                    id="navbarSupportedContent">
                                    <ul
                                        className="navbar-nav ms-auto mb-2 gap-lg-5 gap-md-4 gap-0 py-lg-0 px-lg-0 px-md-4 px-3 py-md-4 py-3 mb-lg-0">
                                        <li className={`nav-item `}>
                                            <Link to="/product" className={`nav-link px-0 ${isProductRoute() ? 'active' : ''}`}
                                                style={{ color: location.pathname === '/product' || location.pathname === '/' ? 'white' : '' }}
                                                onClick={closeDropdown}
                                            >Products</Link>
                                        </li>
                                        {/* <li className="nav-item">
                                            <a className="nav-link px-0"
                                                href="#" >About Us</a>
                                        </li> */}
                                        <li className="nav-item">
                                            <Link to="/resource" className={`nav-link ${location.pathname === '/resource' ? 'active' : ''} px-0 `}
                                                style={{ color: location.pathname === '/product' || location.pathname === '/' ? 'white' : '' }}
                                                onClick={closeDropdown}
                                            >Resources</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contactUs" className={`nav-link ${location.pathname === '/contactUs' ? 'active' : ''} px-0 `}
                                                style={{ color: location.pathname === '/product' || location.pathname === '/' ? 'white' : '' }}
                                                onClick={closeDropdown}
                                            >Contact Us</Link>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default HeaderModel