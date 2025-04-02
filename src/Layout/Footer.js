import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            {/* <footer>
                <div class="container">
                    <div class="row g-4">
                        <div class="col-lg-1 col-md-12 col-sm-12 col-12">
                            <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                                <img src="images/footer_logo.png" alt />
                            </Link>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12 offset-lg-1">
                            <div
                                class="d-flex flex-lg-row gap-lg-5 gap-md-4 gap-3 flex-md-row flex-column footer_nav">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                                    </li>
                                    <li class="mt-3">
                                        <Link to="/product" onClick={() => window.scrollTo(0, 0)}>Products</Link>
                                    </li>
                                    <li class="mt-3">
                                        <Link to="" onClick={() => window.scrollTo(0, 0)}>Resource Center</Link>
                                    </li>
                                    <li class="mt-3">
                                        <Link to="/contactUs" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
                                    </li>
                                    <li class="mt-3">
                                        <Link to="">Support</Link>
                                    </li>

                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-2 col-md-6 col-sm-12 col-12 offset-lg-1">
                            <div
                                class="d-flex flex-lg-row gap-lg-5 gap-md-4 gap-3 flex-md-row flex-column footer_nav">
                                <h3>Socials</h3>
                                <ul>
                                    <li>
                                        <a >LinkedIn</a>
                                    </li>
                                    <li class="mt-3">
                                        <a >X</a>
                                    </li>
                                    <li class="mt-3">
                                        <a >Facebook</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6 col-sm-12 col-12 offset-lg-1">
                            <div
                                class="d-flex flex-lg-column gap-lg-3 gap-md-3 gap-3 flex-md-column flex-column footer_nav">
                                <h3>Privacy policy & Terms of use</h3>
                                <ul>
                                    <li>
                                        <a >Copyright 2024 | All Rights Reserved</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer> */}


            <footer>
                <div class="container">
                    <div class="row g-4">
                        <div
                            class="col-lg-1 col-md-12 col-sm-12 col-12 mb-lg-0 mb-md-0 mb-5 mt-lg-0">
                            <Link to='/' onClick={() => window.scrollTo(0, 0)}>
                                <img src="images/footer_logo.png" alt />
                            </Link>
                        </div>
                        <div
                            class="col-lg-3 col-md-4 col-sm-6 col-6 offset-lg-1 mt-0">
                            <div
                                class="d-flex flex-lg-row gap-lg-5 gap-md-4 gap-3 flex-md-column flex-column footer_nav">
                                <h3>Quick Links</h3>
                                <ul>
                                    <li>
                                        <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
                                    </li>
                                    <li class="mt-3">
                                        <Link to="/product" onClick={() => window.scrollTo(0, 0)}>Products</Link>
                                    </li>
                                    <li class="mt-3">
                                        <Link to="/resource" onClick={() => window.scrollTo(0, 0)}>Resources</Link>
                                    </li>
                                    <li class="mt-3">
                                        <Link to="/contactUs" onClick={() => window.scrollTo(0, 0)}>Contact Us</Link>
                                    </li>
                                    {/* <li class="mt-3">
                                        <Link to="">Support</Link>
                                    </li> */}
                                </ul>
                            </div>
                        </div>
                        <div
                            class="col-lg-2 col-md-4 col-sm-6 col-6 offset-lg-1 mt-0">
                            {/* <div
                                class="d-flex flex-lg-row gap-lg-5 gap-md-4 gap-3 flex-md-column flex-column footer_nav">
                                <h3>Socials</h3>
                                <ul>
                                    <li>
                                        <a href="#">LinkedIn</a>
                                    </li>
                                </ul>
                            </div> */}
                        </div>
                        <div
                            class="col-lg-3 col-md-4 col-sm-12 col-12 offset-lg-1 mt-lg-0 mt-md-0 mt-5">
                            <div
                                class="d-flex flex-lg-column gap-lg-3 gap-md-3 gap-3 flex-md-column flex-column footer_nav">
                                <h3>Privacy policy & Terms of use</h3>
                                <ul>
                                    <li>
                                        <a>Copyright 2024 | All Rights
                                            Reserved</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer