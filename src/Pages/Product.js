import React, { useState } from 'react'
import Modal from 'react-modal';
import RequestModel from '../model/RequestModel';
import { Link } from 'react-router-dom';

const Product = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProductType, setSelectedProductType] = useState(null);

    const openModal = (event, productType) => {
        event.preventDefault();
        setSelectedProductType(productType);
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <section class="siteBanner inner_dark_banner inner_banner">
                <div class="container">
                    <div class="row g-4">
                        <div
                            class="col-xl-5 col-lg-12 col-md-12 col-sm-12 col-12 d-flex align-items-center mt-xl-0">
                            <div>
                                <div class="section_content banner_content h-auto">
                                    <img src="images/clean_logo.png" style={{ width: "100%", maxWidth: "294px" }} class="d-lg-block d-md-block d-none" alt="" />
                                    <h2 class="mb-3 text-white mt-lg-5 mt-md-4 mt-0">Accurate, Fast, Reliable - Cleanliness Verification Solutions</h2>
                                </div>
                                <div class="section_content">
                                    <p class="mb-0 text-white">CleanRead products are designed for comprehensive cleanliness verification across various environments. From healthcare facilities to food processing plants, ensure your surfaces meet the highest standards of cleanliness.</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-xl-4 offset-xl-3 col-lg-12 col-md-12 col-sm-12 col-12 mt-xl-0 mt-lg-0 mt-md-0 mt-5 d-flex align-items-end">
                            <div class="banner_img w-100">
                                <img src="images/product_img.png"
                                    class="img-fluid w-100"
                                    alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <!--Product section--> */}
            <div className='product_sec_outer'>
                <section class="product_sec">
                    <div class="container">
                        <div class="row g-lg-4 g-md-3 g-4">
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="product_card">
                                    <img src="images/product_1.png" alt="" />
                                    <div class="product_card_ingo">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4 mt-lg-0 mt-md-0 mt-3">CleanRead™ Handheld</h3>
                                        <div
                                            class="product_button d-flex align-items-center gap-lg-3 gap-md-3 gap-2">
                                            <Link to='/product-detail' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                                More</Link>
                                            <a onClick={(e) => openModal(e)}
                                                class="btn btn-outline-primary">Request
                                                a quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="product_card">
                                    <img src="images/product_2.png" alt="" />
                                    <div class="product_card_ingo">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4 mt-lg-0 mt-md-0 mt-3">Surface ATP Detection Swabs</h3>
                                        <div
                                            class="product_button d-flex align-items-center gap-lg-3 gap-md-3 gap-2">
                                            <Link to='/surface-atp' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                                More</Link>
                                            <a onClick={(e) => openModal(e)}
                                                class="btn btn-outline-primary">Request
                                                a quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="product_card">
                                    <img src="images/product_3.png" alt="" />
                                    <div class="product_card_ingo">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4 mt-lg-0 mt-md-0 mt-3">Aqua ATP Detection Swabs</h3>
                                        <div
                                            class="product_button d-flex align-items-center gap-lg-3 gap-md-3 gap-2">
                                            <Link to='/aqua-atp' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                                More</Link>
                                            <a onClick={(e) => openModal(e)}
                                                class="btn btn-outline-primary">Request
                                                a quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="product_card">
                                    <img src="images/product_4.png" alt="" />
                                    <div class="product_card_ingo">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4 mt-lg-0 mt-md-0 mt-3">Surface Protein Detection <br className='d-lg-block d-md-none d-none' />Swabs</h3>
                                        <div
                                            class="product_button d-flex align-items-center gap-lg-3 gap-md-3 gap-2">
                                            <Link to='/surface-protein' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                                More</Link>
                                            <a onClick={(e) => openModal(e)}
                                                class="btn btn-outline-primary">Request
                                                a quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="product_card">
                                    <img src="images/product_5.png" alt="" />
                                    <div class="product_card_ingo">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4 mt-lg-0 mt-md-0 mt-3">CleanRead<sup>™</sup>  Reporting <br className='d-lg-block d-md-none d-none' />Software</h3>
                                        <div
                                            class="product_button d-flex align-items-center gap-lg-3 gap-md-3 gap-2">
                                            <Link to='/reporting-software' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                                More</Link>
                                            <a
                                                onClick={(e) => openModal(e)}
                                                class="btn btn-outline-primary">Request
                                                a quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="product_card">
                                    <img src="images/product_6.png" alt="" />
                                    <div class="product_card_ingo">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4 mt-lg-0 mt-md-0 mt-3">Viral Transport Medium & Flocked Swab Kit</h3>
                                        <div
                                            class="product_button d-flex align-items-center gap-lg-3 gap-md-3 gap-2">
                                            <Link to='/transport-kit-ATP' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                                More</Link>
                                            <a
                                                onClick={(e) => openModal(e)}
                                                class="btn btn-outline-primary">Request
                                                a quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="product_card">
                                    <img src="images/product_7.png" alt="" />
                                    <div class="product_card_ingo">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4 mt-lg-0 mt-md-0 mt-3">COVID-19 Viral Transport <br className='d-lg-block d-md-none d-none' />Medium</h3>
                                        <div
                                            class="product_button d-flex align-items-center gap-lg-3 gap-md-3 gap-2">
                                            <Link to='/viral-transport-medium' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                                More</Link>
                                            <a
                                                onClick={(e) => openModal(e)}
                                                class="btn btn-outline-primary">Request
                                                a quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="product_card product_eight">
                                    <img src="images/product_8.png" alt="" />
                                    <div class="product_card_ingo">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4 mt-lg-0 mt-md-0 mt-3">Sterile Nasal Flocked Swab</h3>
                                        <div
                                            class="product_button d-flex align-items-center gap-lg-3 gap-md-3 gap-2">
                                            <Link to='/sterile-nasal-flocked-swab' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                                More</Link>
                                            <a
                                                onClick={(e) => openModal(e)}
                                                class="btn btn-outline-primary">Request
                                                a quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div class="product_card product_eight">
                                    <img src="images/product_9.png" alt="" style={{objectFit:"contain"}}/>
                                    <div class="product_card_ingo">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4 mt-lg-0 mt-md-0 mt-3">Visual Inspection Borescope</h3>
                                        <div
                                            class="product_button d-flex align-items-center gap-lg-3 gap-md-3 gap-2">
                                            <Link to='/visual-inspection-borescope' class="btn btn-primary" onClick={() => window.scrollTo(0, 0)}>Learn
                                                More</Link>
                                            <a
                                                onClick={(e) => openModal(e)}
                                                class="btn btn-outline-primary">Request
                                                a quote</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                class="modal custom_modal"
            >
                <RequestModel closeModal={closeModal} />
            </Modal>

        </div>
    )
}

export default Product