import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import RequestModel from '../model/RequestModel';
import { saveAs } from 'file-saver';

const TransportKitATP = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const navigate = useNavigate();

    const handleNavigateBack = () => {
        navigate(-1);
    };

    const [selectedProductType, setSelectedProductType] = useState(null);

    const openModal = (event, productType) => {
        event.preventDefault();
        setSelectedProductType(productType);
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const handleDownload = () => {
        const pdfPath = 'pdf/Aqua_ATP_Detection Swab.pdf';
        saveAs(pdfPath, 'Aqua_ATP_Detection Swab.pdf');
    };

    return (
        <div>
            <section class="siteBanner product_detail_banner">
                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-0 pb-lg-4 pb-md-4 pb-4">
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
                                        Sterile Nasal Flocked Swab
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        class="row g-4 flex-lg-row flex-md-column-reverse flex-column-reverse">
                        <div
                            class="col-xl-7 col-lg-7 col-md-12 col-sm-12 col-12 d-flex align-items-start">
                            <div class="section_content h-auto">
                                {/* <img src="images/surface_icon.png" className='d-lg-block d-md-block d-none' alt="" /> */}
                                <h2 class="mt-lg-4 mt-md-4 mt-0 mb-lg-4 mb-md-4 mb-3">Sterile Nasal Flocked Swab</h2>
                                <p class="mb-4"><b>Innovative Technology for Sample Collection & Diagnostics</b></p>
                                <p class="mb-4">The Nasal Flocked Swab is used for cell & virus specimen collection and has been designed specifically for Nasopharyngeal clinical diagnostics. The flocked swab is ideal for collecting large number of cells and instantly releasing the specimen cells into the transport medium.</p>
                                <div
                                    class="d-flex flex-lg-row gap-lg-4 gap-md-3 gap-2 flex-md-row flex-column">
                                    <button
                                        class="btn btn-primary outline-dark py-3 px-4" onClick={(e) => openModal(e)}>Request
                                        a quote</button>
                                </div>

                                <div
                                    class="section_content detail_product_card mt-lg-5 mt-md-4 mt-4">
                                    <h3 class="mb-lg-4 mb-md-4 mb-3"><b>Features</b></h3>
                                    <p className='mb-1'>Vial features</p>
                                    <ul class="surface_list">
                                        <li class="mb-2"><b>Ergonomic and Anatomic Design :</b> Perpendicular nylon fibers act like a soft brush, improving patient comfort and efficiency in cell specimen collection.</li>
                                        <li class="mb-2"><b>Superior Sample Elution :</b> The open fiber structure allows the specimen cells to instantly dislodge into the liquid medium.</li>
                                        <li class="mb-2"><b>Increased Assay Sensitivity :</b> Flocked swabs are proven to elute &#62;95% of the original sample rapidly thus easily resulting in improved assay sensitivity.</li>
                                        <li class="mb-2"><b>Quantitative Volume Transfer :</b> Measurable and consistent uptake and transfer from patient to the test tube. Flocked Swab has no internal mattress core to trap the sample like traditional fiber wound swabs.</li>
                                        <li class="mb-2"><b>Certified Free of Inhibitors and Interference :</b>  Collection swabs are certified DNASE, RNASE-free and human DNA-free. They are also free of any PCR inhibitors.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-xl-5 col-lg-5 col-md-12 d-flex align-items-start justify-content-center col-sm-12 col-12">
                            <div class="surface_img">
                                {/* <img src="images/surface_img.png" width="100%" alt /> */}
                                <img src="images/sterile-nasal-flocked-swab.png" width="100%" alt="" />
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
                                <h3 class="mb-lg-2 mb-md-2 mb-0"><b>More from Empire Bio Diagnostics</b> </h3>
                            </div>
                        </div>

                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Link to='/product-detail' onClick={() => window.scrollTo(0, 0)}>
                                <div class="product_card">
                                    <img src="images/product_1.png" alt="" />
                                    <div class="product_card_ingo  mt-lg-0 mt-md-0 mt-3">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4">CleanRead™ Handheld</h3>
                                        <div class="section_content">
                                            <p class="mb-0">Enhance Your Cleanliness Checks with Immediate, Precise Feedback.</p>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </div>
                        <div class="col-xl-4 col-lg-6 col-md-6 col-sm-12 col-12">
                            <Link to='/surface-atp' onClick={() => window.scrollTo(0, 0)}>
                                <div class="product_card">
                                    <img src="images/product_2.png" alt="" />
                                    <div class="product_card_ingo  mt-lg-0 mt-md-0 mt-3">
                                        <h3 class="mb-lg-3 mb-md-3 mb-4">Surface ATP Detection Swabs</h3>
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
                <RequestModel closeModal={closeModal} type={selectedProductType} />
            </Modal>
        </div>
    )
}

export default TransportKitATP