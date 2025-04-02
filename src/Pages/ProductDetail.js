import React, { useState } from 'react'
import Modal from 'react-modal';
import RequestModel from '../model/RequestModel';
import { Link, useNavigate } from 'react-router-dom';
import { saveAs } from 'file-saver';
const ProductDetail = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProductType, setSelectedProductType] = useState(null);

    const navigate = useNavigate();
    const handleNavigateBack = () => {
        navigate(-1);
    };


    const openModal = (event, productType) => {
        event.preventDefault();
        setSelectedProductType(productType);
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleDownload = () => {
        const pdfPath = 'pdf/Handheld_IFU_rev.pdf';
        saveAs(pdfPath, 'Handheld_IFU_rev.pdf');
    };

    return (
        <div>
            <section class="siteBanner product_detail_banner " >
                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-4 pb-lg-3 pb-md-3" >
                            <div class="page_breadcrumb">
                                <ul class="d-flex align-items-center">
                                    <li>
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            width="24" height="24"
                                            viewBox="0 0 24 24" fill="none" onClick={handleNavigateBack}>
                                            <g clip-path="url(#clip0_40_176)">
                                                <path
                                                    d="M12.8507 21.6094L11.8077 20.5664L9.31865 18.0774L6.29522 15.0539L3.696 12.4547C3.27412 12.0328 2.85928 11.6063 2.43037 11.1891L2.41162 11.1703V12.8274L3.45459 11.7844L5.94365 9.29533L8.96709 6.27189L11.5663 3.67267C11.9882 3.2508 12.4147 2.83361 12.8319 2.40705L12.8507 2.3883C13.064 2.17502 13.1929 1.86095 13.1929 1.55861C13.1929 1.27033 13.0663 0.92814 12.8507 0.728921C12.628 0.525015 12.3351 0.372671 12.021 0.386734C11.7093 0.400796 11.4163 0.506265 11.1913 0.728921L10.1483 1.77189L7.65928 4.26095L4.63584 7.28439L2.03662 9.88361C1.61475 10.3055 1.18818 10.7227 0.770996 11.1492L0.752246 11.168C0.30459 11.6156 0.30459 12.3774 0.752246 12.825C1.10146 13.1766 1.45068 13.5235 1.79756 13.8727L4.28662 16.3617L7.31006 19.3852L9.90928 21.9844C10.3312 22.4063 10.7483 22.8328 11.1749 23.25L11.1937 23.2688C11.4069 23.482 11.721 23.611 12.0233 23.611C12.3116 23.611 12.6538 23.4844 12.853 23.2688C13.0569 23.0461 13.2093 22.7531 13.1952 22.4391C13.1788 22.1274 13.0757 21.8344 12.8507 21.6094Z"
                                                    fill="#1E1E1E" />
                                                <path
                                                    d="M1.57756 13.1719H21.5744C21.844 13.1719 22.1158 13.1742 22.3854 13.1719H22.4205C22.7205 13.1719 23.0369 13.0406 23.2502 12.8297C23.4541 12.6258 23.6065 12.293 23.5924 12C23.5783 11.6977 23.4799 11.3836 23.2502 11.1703C23.0205 10.9594 22.7393 10.8281 22.4205 10.8281H2.42365C2.15412 10.8281 1.88225 10.8258 1.61272 10.8281H1.57756C1.27756 10.8281 0.961154 10.9594 0.747873 11.1703C0.543967 11.3742 0.391623 11.707 0.405685 12C0.419748 12.3023 0.518185 12.6164 0.747873 12.8297C0.979904 13.0383 1.26115 13.1719 1.57756 13.1719Z"
                                                    fill="#1E1E1E" />
                                            </g>
                                            <defs>
                                                <clippath id="clip0_40_176">
                                                    <rect width="24" height="24"
                                                        fill="white" />
                                                </clippath>
                                            </defs>
                                        </svg>
                                    </li>
                                    <li class="ps-lg-5 ps-md-4 ps-4">
                                        Products
                                    </li>
                                    <li class="px-3">
                                        |
                                    </li>
                                    <li class="active">
                                        CleanRead™ Handheld
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row g-4 flex-lg-row flex-md-column-reverse flex-column-reverse">

                        <div
                            class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-start">
                            <div class="section_content h-auto">
                                <img src="images/product_detail.png" className='d-lg-block d-md-block d-none' width="199px" alt="" />
                                <h2 class="mt-lg-4 mt-md-4 mt-0 mb-lg-4 mb-md-4 mb-3">CleanRead<sup>™</sup> Handheld ATP
                                    Testing Device</h2>
                                <p class="mb-4"><b>Our flagship monitoring system uses bioluminescence technology for real-time cleanliness assessment. Ideal for high-traffic areas and critical environments.</b></p>
                                <div
                                    class="d-flex flex-lg-row gap-lg-4 gap-md-3 gap-2 flex-md-row flex-column">
                                    <button
                                        class="btn btn-primary outline-dark py-3 px-4" onClick={(e) => openModal(e)}>Request
                                        a quote</button>
                                    <button
                                        class="btn btn-outline-primary py-3 px-4" onClick={handleDownload}>Download
                                        brochure</button>
                                </div>

                                <div class="row g-4 mt-lg-4 mt-md-4 mt-0">
                                    <div
                                        class="col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div class="page_card">
                                            <img src="images/offline.svg" alt="" />
                                            <div>
                                                <h3 class="mb-2 mt-lg-3 mt-md-3 mt-0">Offline Functionality</h3>
                                                <p class="mb-0">Automatically sync data with the CleanRead™ Contamination Reporting web portal when Wi-Fi is accessible.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div class="page_card">
                                            <img src="images/rfid.svg" alt="" />
                                            <div>
                                                <h3 class="mb-2 mt-lg-3 mt-md-3 mt-0">RFID & Barcode Capability</h3>
                                                <p class="mb-0">Scan RFID tags and barcodes on equipment to associate them with test points for easy initiation of tests.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        class="col-lg-4 col-md-4 col-sm-12 col-12">
                                        <div class="page_card">
                                            <img src="images/al-based.svg" alt="" />
                                            <div>
                                                <h3 class="mb-2 mt-lg-3 mt-md-3 mt-0">AI based Test Scheduling</h3>
                                                <p class="mb-0">Set up daily testing schedules through the dashboard.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                            <div id="carouselExampleIndicators"
                                class="carousel slide">
                                <div class="carousel-inner">
                                    <div class="carousel-item active">
                                        <div class="banner_carousel">
                                            <img src="images/carousel_1.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="banner_carousel">
                                            <img src="images/indi_1.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="banner_carousel">
                                            <img src="images/indi_2.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="banner_carousel">
                                            <img src="images/indi_3.png" alt="" />
                                        </div>
                                    </div>
                                    <div class="carousel-item">
                                        <div class="banner_carousel">
                                            <img src="images/indi_4.png" alt="" />
                                        </div>
                                    </div>
                                </div>

                                <ul
                                    class="carousel_indicator carousel-indicators overflow-auto gap-lg-4 gap-md-4 gap-2 mt-4 d-flex justify-content-start align-items-center">
                                    <li type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="1" class="active"
                                        aria-current="true"
                                        aria-label="Slide 1">
                                        <img src="images/indi_1.png" alt="" />
                                    </li>
                                    <li type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="2"
                                        aria-label="Slide 2">
                                        <img src="images/indi_2.png" alt="" />
                                    </li>
                                    <li type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="3"
                                        aria-label="Slide 3">
                                        <img src="images/indi_3.png" alt="" />
                                    </li>
                                    <li type="button"
                                        data-bs-target="#carouselExampleIndicators"
                                        data-bs-slide-to="4"
                                        aria-label="Slide 4">
                                        <img src="images/indi_4.png" alt="" />
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
            <section class="product_detail">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-12 col-12">
                            <div
                                class="section_content detail_product_card">
                                <h3 class="mb-3"><b> Product details</b></h3>
                                <p class="mb-0">The CleanRead™ Handheld ATP Testing Device is designed for healthcare facilities demanding quick, easy-to-use, and reliable solutions for assessing cleaning protocols and verifying efficacy within 15 seconds.</p>
                                {/* <button class="btn btn-outline-primary">Download
                                    user manual</button> */}
                            </div>
                        </div>
                    </div>
                    <div
                        class="row g-4 justify-content-center mt-lg-0 mt-md-4 mt-0">
                        <div
                            class="col-xl-3 col-lg-4 col-md-12 col-12 d-lg-flex d-md-flex d-none flex-column justify-content-center">
                            <div
                                class="d-flex align-items-lg-center align-items-md-center gap-4 flex-lg-row flex-md-row flex-column">
                                <div>
                                    <img src="images/plan.svg" alt="" />
                                </div>
                                <div class="page_card">
                                    <h3 class="mb-2 mt-3">Today’s Plan</h3>
                                    <p class="mb-0">Let’s you view test points scheduled to be tested today.</p>
                                </div>
                            </div>
                            <div
                                class="d-flex align-items-lg-center my-lg-5 my-md-4 my-4 align-items-md-center gap-4 flex-lg-row flex-md-row flex-column">
                                <div>
                                    <img src="images/quick_test.svg" alt="" />
                                </div>
                                <div class="page_card">
                                    <h3 class="mb-2 mt-3">Quick Test</h3>
                                    <p class="mb-0">Evaluate the cleanliness of a surface quickly, without the need of registering the test point.</p>
                                </div>
                            </div>
                            <div
                                class="d-flex align-items-lg-center align-items-md-center gap-4 flex-lg-row flex-md-row flex-column">
                                <div>
                                    <img src="images/report.svg" alt="" />
                                </div>
                                <div class="page_card">
                                    <h3 class="mb-2 mt-3">Report</h3>
                                    <p class="mb-0">Access ATP testing reports on the Handheld device.</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12 col-12">
                            <div>
                                <img src="images/detail_img.png" width="100%" alt="" />
                            </div>
                        </div>
                        <div
                            class="col-xl-3 col-lg-4 col-md-12 col-12  d-lg-flex d-md-flex d-none flex-column justify-content-center">
                            <div
                                class="d-flex align-items-lg-center align-items-md-center gap-4 flex-lg-row flex-md-row flex-column">
                                <div>
                                    <img src="images/test_point.svg" alt="" />
                                </div>
                                <div class="page_card">
                                    <h3 class="mb-2 mt-3">Test Points</h3>
                                    <p class="mb-0">A visual library of instruments, surfaces that are tagged with critical touch points suitable for ATP testing.</p>
                                </div>
                            </div>
                            <div
                                class="d-flex align-items-lg-center my-lg-5 my-md-4 my-4 align-items-md-center gap-4 flex-lg-row flex-md-row flex-column">
                                <div>
                                    <img src="images/syncro.svg" alt="" />
                                </div>
                                <div class="page_card">
                                    <h3 class="mb-2 mt-3">Synchronize</h3>
                                    <p class="mb-0">Sync test results from the handheld to the cloud after the device has been used in offline mode.</p>
                                </div>
                            </div>
                            <div
                                class="d-flex align-items-lg-center align-items-md-center gap-4 flex-lg-row flex-md-row flex-column">
                                <div>
                                    <img src="images/scan.svg" alt="" />
                                </div>
                                <div class="page_card">
                                    <h3 class="mb-2 mt-3">Scan Barcode</h3>
                                    <p class="mb-0">Test points associated with an instrument can be linked to a barcode for quick access and ATP testing.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="compatible">
                <div class="container">
                    <div class="row g-4">
                        <div class="col-12">
                            <div
                                class="section_content detail_product_card">
                                <h3 class="mb-2"><b>Compatible products</b></h3>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Link to='/surface-atp' onClick={() => window.scrollTo(0, 0)}>
                                <div class="product_card">
                                    <img src="images/product_2.png" alt="" />
                                    <div class="product_card_ingo  mt-lg-0 mt-md-0 mt-3">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4">Surface ATP Detection Swabs</h3>
                                        <div class="section_content">
                                            <p class="mb-0">Precision swabs for
                                                comprehensive surface
                                                testing, compatible with our monitoring
                                                systems.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Link to='/aqua-atp' onClick={() => window.scrollTo(0, 0)}>
                                <div class="product_card">
                                    <img src="images/product_3.png" alt="" />
                                    <div class="product_card_ingo  mt-lg-0 mt-md-0 mt-3">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4">Aqua ATP Detection Swabs</h3>
                                        <div class="section_content">
                                            <p class="mb-0">Precision swabs for
                                                comprehensive surface testing,
                                                compatible with our monitoring
                                                systems.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Link to='/surface-protein' onClick={() => window.scrollTo(0, 0)}>
                                <div class="product_card">
                                    <img src="images/product_4.png" alt="" />
                                    <div class="product_card_ingo  mt-lg-0 mt-md-0 mt-3">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4">Surface Protein Detection
                                            Swabs</h3>
                                        <div class="section_content">
                                            <p class="mb-0">Precision swabs for
                                                comprehensive surface testing,
                                                compatible with our monitoring
                                                systems.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
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

export default ProductDetail