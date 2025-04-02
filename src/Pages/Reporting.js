import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Modal from 'react-modal';
import { saveAs } from 'file-saver';
import ScheduleModel from '../model/ScheduleModel';
import RequestModel from '../model/RequestModel';

const Reporting = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [selectedProductType, setSelectedProductType] = useState(null);
    const [modalType, setModalType] = useState(null);
    const navigate = useNavigate();
    const handleNavigateBack = () => {
        navigate(-1);
    };

    const openModal = (event, productType) => {
        event.preventDefault();
        setSelectedProductType(productType);
        if (productType === 'quote') {
            setModalIsOpen(true);
            setModalType('quote');
        } else if (productType === 'demo') {
            setModalIsOpen(true);
            setModalType('demo');
        }
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    return (
        <div>
            <section class="siteBanner product_detail_banner">
                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-4 pb-lg-3 pb-md-3">
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
                                        CleanRead™ Reporting Tool
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div
                        class="row g-4 flex-lg-row flex-md-column-reverse flex-column-reverse">
                        <div
                            class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-start">
                            <div>
                                <div class="section_content banner_content h-auto">
                                    <h2 class="mt-lg-4 mt-md-4 mt-0 mb-lg-4 mb-md-4 mb-3">CleanRead™ Reporting
                                        Software</h2>
                                </div>
                                <div class="section_content h-auto">
                                    <p className='mb-4'>RLU test values are seamless synchronized
                                        from the CleanRead™ Handheld device to a
                                        robust dashboard, delivering actionable
                                        real-time results.</p>
                                    <div
                                        class="d-flex flex-lg-row gap-lg-4 gap-md-3 gap-2 flex-md-row flex-column">
                                        <button
                                            class="btn btn-primary outline-dark py-3 px-4" onClick={(e) => openModal(e, 'quote')}>Request
                                            a quote</button>
                                        <button
                                            class="btn btn-outline-primary py-3 px-4" onClick={(e) => openModal(e, 'demo')}>Schedule
                                            a demo</button>
                                    </div>
                                </div>
                                <div class="row g-4 mt-lg-5 mt-md-4 mt-0">
                                    <div
                                        class="col-lg-4 col-md-4 col-sm-12 col-12 mt-lg-0">
                                        <div class="page_card">
                                            {/* <img src="images/fully-hip.png" alt="" /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                <g filter="url(#filter0_d_480_56)">
                                                    <path d="M41.3333 0H22.6667C12.3574 0 4 8.35735 4 18.6667V37.3333C4 47.6426 12.3574 56 22.6667 56H41.3333C51.6426 56 60 47.6426 60 37.3333V18.6667C60 8.35735 51.6426 0 41.3333 0Z" fill="white" />
                                                </g>
                                                <path d="M50.3795 17.7048C50.1981 17.5622 49.9621 17.513 49.7392 17.57C47.1181 18.2233 41.4481 15.483 39.1355 13.9404C37.427 12.8022 35.6692 13.6552 34.5207 14.6689L34.3625 14.1296C34.7644 13.6137 34.9847 12.9785 34.9873 12.3226C34.9873 10.6737 33.6495 9.33593 32.0007 9.33593C30.3518 9.33593 29.014 10.6737 29.014 12.3226C29.014 12.9759 29.2369 13.6111 29.6388 14.1296L29.4807 14.6715C28.3321 13.6578 26.5718 12.8074 24.8658 13.943C22.5507 15.4856 16.8781 18.2285 14.2621 17.5726C13.8629 17.4715 13.4558 17.7152 13.3573 18.117C13.3418 18.1767 13.334 18.2363 13.334 18.2985C13.334 19.7919 14.3477 22.5685 18.1225 22.7681C18.8769 23.9504 20.5725 25.5189 22.9629 25.0548C24.0569 25.48 25.2236 25.6926 26.4007 25.677C26.9451 26.9993 28.3451 28.2152 30.2014 29.0837L30.5695 34.9689C30.3932 34.9041 30.2169 34.8522 30.0407 34.7796C28.0625 33.9889 27.0644 32.6693 27.1292 31.8293C27.1992 30.9452 28.4462 30.533 29.1825 30.3644C29.5844 30.2737 29.8358 29.8719 29.7451 29.47C29.6544 29.0681 29.2525 28.8167 28.8507 28.9074C26.2036 29.5115 25.7032 30.9244 25.641 31.7126C25.5114 33.377 27.0903 35.2074 29.4858 36.1667C29.8825 36.3248 30.2792 36.4648 30.6732 36.5944L31.2592 45.9719C31.2851 46.3841 31.6403 46.6952 32.0499 46.6693C32.4258 46.6459 32.724 46.3452 32.7473 45.9719L33.284 37.393C35.384 38.0359 36.4832 38.5648 36.4832 39.9519C36.4832 42.3033 34.1603 42.9359 34.0592 42.9619C33.6599 43.063 33.4188 43.47 33.5199 43.8693C33.621 44.2685 34.0255 44.5096 34.4247 44.4085C35.6536 44.1 37.9766 42.7752 37.9766 39.9519C37.9766 37.3748 35.804 36.5815 33.3799 35.8607L33.7351 30.17C33.8699 30.1933 34.0021 30.2193 34.1369 30.2374C35.7469 30.4681 36.7399 31.0152 36.8644 31.7385C37.007 32.5707 36.0736 33.7167 34.6425 34.4659C34.277 34.6578 34.1369 35.1089 34.3288 35.4744C34.5207 35.84 34.9718 35.98 35.3373 35.7881C37.4218 34.6967 38.5988 33.0063 38.337 31.4844C38.1944 30.6574 37.4866 29.2056 34.3495 28.757C34.1758 28.7311 34.0021 28.7026 33.831 28.6689L34.0592 25.003C34.0592 25.003 34.0721 25.003 34.0747 25.003C34.6944 25.2441 35.3399 25.423 35.9958 25.5344C35.6925 26.0115 35.2129 26.4885 34.5647 26.937C34.2251 27.173 34.1421 27.637 34.3755 27.9767C34.6114 28.3163 35.0755 28.3993 35.4125 28.1659C36.4858 27.4244 37.2221 26.5663 37.5903 25.677C37.6084 25.677 37.6266 25.677 37.6447 25.677C38.8062 25.6848 39.9573 25.4696 41.0384 25.047C43.434 25.5137 45.1269 23.9426 45.8788 22.7604C49.651 22.5607 50.6673 19.7841 50.6673 18.2907C50.6673 18.06 50.561 17.8448 50.3795 17.7022V17.7048ZM30.6499 15.9937L30.9118 15.0993C31.2695 15.2393 31.6507 15.3067 32.0369 15.3015C32.1199 15.3015 33.1129 15.1641 33.0947 15.0993L33.3566 15.9937L32.0058 17.7956L30.6551 15.9937H30.6499ZM32.0007 10.8267C32.8225 10.8267 33.4914 11.4904 33.494 12.3148C33.494 12.7219 33.3281 13.1133 33.0325 13.3959C33.0299 13.3985 33.0247 13.4011 33.0195 13.4037C32.4414 13.9326 31.5547 13.9326 30.9792 13.4037C30.9766 13.4011 30.9714 13.3985 30.9662 13.3959C30.3699 12.8281 30.3492 11.8844 30.9195 11.2881C31.2021 10.9926 31.591 10.8267 32.0007 10.8267ZM28.0003 25.5293C28.6562 25.4178 29.2992 25.2415 29.9214 25.003C29.9292 25.003 29.9395 25.003 29.9473 25.003L30.0925 27.3441C29.1514 26.81 28.4125 26.1826 28.0003 25.5293ZM32.0007 33.95L31.7336 29.6748C31.9073 29.7293 32.081 29.7837 32.2573 29.833L32.0007 33.95ZM31.6325 28.057L31.3914 24.1993L31.2644 22.1822L31.7155 21.2826H32.2858L32.7369 22.1822L32.6099 24.1993L32.3532 28.3033C32.1069 28.2281 31.8658 28.1452 31.6325 28.057ZM45.4407 21.28C45.4225 21.28 43.4962 21.2644 42.2362 20.0044C41.9458 19.7141 41.4714 19.7141 41.181 20.0044C40.8907 20.2948 40.8907 20.7693 41.181 21.0596C42.0962 21.9748 43.2369 22.4 44.1081 22.597C43.5118 23.2244 42.5214 23.883 41.1447 23.5407C41.1084 23.5356 41.0721 23.533 41.0358 23.533C41.0125 23.5278 40.9866 23.5226 40.9632 23.5174C40.9529 23.5174 39.9262 23.5044 39.3921 22.4363C39.2081 22.0681 38.7595 21.9178 38.3914 22.1019C38.0232 22.2859 37.8729 22.7344 38.0569 23.1026C38.241 23.4785 38.4951 23.8156 38.7984 24.1033C38.4847 24.1474 38.1684 24.1733 37.8521 24.1837C37.7977 23.4889 37.4762 22.5867 36.4807 21.687C36.4807 21.6741 36.4832 21.6637 36.4832 21.6507C36.4832 21.0311 35.9829 20.5307 35.3632 20.5307C34.7436 20.5307 34.2432 21.0311 34.2432 21.6507C34.2432 22.2704 34.7436 22.7707 35.3632 22.7707C35.3892 22.7707 35.4125 22.7656 35.4384 22.763C35.9232 23.1907 36.2214 23.6315 36.3199 24.08C35.721 23.9815 35.1351 23.8181 34.5725 23.5926C34.4636 23.5381 34.4092 23.5174 34.1525 23.507L34.2432 22.0707C34.251 21.9385 34.2251 21.8089 34.1655 21.6896L33.4188 20.1963C33.2918 19.9422 33.0325 19.7841 32.7499 19.7841H31.2566C30.974 19.7841 30.7147 19.9448 30.5877 20.1963L29.841 21.6896C29.7814 21.8063 29.7555 21.9385 29.7632 22.0707L29.854 23.507C29.6051 23.5148 29.561 23.533 29.4858 23.5693C28.9051 23.8026 28.301 23.9737 27.684 24.0748C27.7825 23.6263 28.0755 23.1856 28.5577 22.7604C28.5862 22.7604 28.6147 22.7681 28.6432 22.7681C29.2629 22.7681 29.7632 22.2678 29.7632 21.6481C29.7632 21.0285 29.2629 20.5281 28.6432 20.5281C28.0236 20.5281 27.5232 21.0285 27.5232 21.6481C27.5232 21.6585 27.5258 21.6663 27.5258 21.6767C26.5458 22.5607 26.2166 23.4526 26.1595 24.1811C25.8407 24.1733 25.5218 24.1474 25.2055 24.1033C25.5114 23.8181 25.7629 23.4785 25.9495 23.1026C26.1336 22.7344 25.9832 22.2859 25.6151 22.1019C25.2469 21.9178 24.7984 22.0681 24.6144 22.4363C24.3188 23.0533 23.7173 23.4656 23.0355 23.5174C23.0121 23.52 22.9862 23.5252 22.9629 23.533C22.9292 23.533 22.8955 23.533 22.8618 23.5407C21.4825 23.8856 20.4921 23.2244 19.8984 22.597C20.7695 22.4 21.9103 21.9748 22.8255 21.0596C23.1158 20.7693 23.1158 20.2948 22.8255 20.0044C22.5351 19.7141 22.0607 19.7141 21.7703 20.0044C20.5336 21.2411 18.6151 21.2774 18.5632 21.28C16.1262 21.28 15.2784 20.0407 14.9855 19.1515C18.3792 19.2189 23.6136 16.5693 25.6981 15.1796C27.3184 14.0959 29.0918 16.4007 29.1669 16.4993L29.2344 16.5874L31.4069 19.4859C31.6532 19.8152 32.1225 19.8826 32.4518 19.6363C32.5088 19.5948 32.5581 19.543 32.6021 19.4859L34.7747 16.59L34.8421 16.4993C34.8603 16.4759 36.6777 14.0907 38.311 15.1796C40.3955 16.5693 45.6221 19.2526 49.0236 19.1515C48.7307 20.0433 47.8829 21.28 45.4458 21.28H45.4407Z" fill="#1E1E1E" />
                                                <path d="M29.9448 42.9567C29.8462 42.9307 27.5207 42.2981 27.5207 39.9467C27.5207 38.9719 28.0029 38.4093 29.2992 37.8752C29.6803 37.717 29.8618 37.2815 29.7036 36.9004C29.5455 36.5193 29.1099 36.3378 28.7288 36.4959C27.5699 36.973 26.0273 37.8519 26.0273 39.9493C26.0273 42.7726 28.3503 44.1 29.5792 44.4059C29.6388 44.4215 29.6985 44.4293 29.7607 44.4293C30.1729 44.4293 30.5073 44.0922 30.5048 43.68C30.5048 43.3404 30.274 43.0448 29.9448 42.9593V42.9567Z" fill="#1E1E1E" />
                                                <defs>
                                                    <filter id="filter0_d_480_56" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy="4" />
                                                        <feGaussianBlur stdDeviation="2" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0196078 0 0 0 0 0.321569 0 0 0 0.2 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_480_56" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_480_56" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <h3 class="mb-0 mt-lg-3 mt-md-3 mt-0">Fully HIPAA
                                                Compliant
                                                cloud-based app.</h3>
                                        </div>
                                    </div>
                                    <div
                                        class="col-lg-4 col-md-4 col-sm-12 col-12 mt-lg-0">
                                        <div class="page_card">
                                            {/* <img src="images/Predective.png" alt="" /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                <g filter="url(#filter0_d_480_173)">
                                                    <path d="M41.3333 0H22.6667C12.3574 0 4 8.35735 4 18.6667V37.3333C4 47.6426 12.3574 56 22.6667 56H41.3333C51.6426 56 60 47.6426 60 37.3333V18.6667C60 8.35735 51.6426 0 41.3333 0Z" fill="white" />
                                                </g>
                                                <path d="M39.1504 16.5952H50.3867V21.3474" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M24.8496 39.4048H13.6133V34.6526" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M40.1718 22.2963C40.1718 21.2463 39.2566 20.3959 38.1289 20.3959H25.8711C24.7433 20.3959 23.8281 21.2463 23.8281 22.2963" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M23.8281 33.7037C23.8281 34.7537 24.7433 35.6041 25.8711 35.6041H38.1289C39.2566 35.6041 40.1718 34.7537 40.1718 33.7037" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M32 35.6041V39.4048" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M36.0859 35.6041V39.4048" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M27.9141 35.6041V39.4048" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M32 16.5952V20.3959" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M36.0859 16.5952V20.3959" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M27.9141 16.5952V20.3959" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M23.8281 28H16.6777C15.5733 28.0207 14.6581 27.2067 14.6348 26.1774C14.6348 26.1515 14.6348 26.1256 14.6348 26.0996V22.2989" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M23.8281 31.8007H19.7422" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M23.8281 24.1993H19.7422" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M44.2578 31.8007H40.1719" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M44.2578 24.1993H40.1719" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M27.9143 31.8007V26.097C27.9014 25.5837 28.3395 25.1585 28.8918 25.1456C28.9073 25.1456 28.9203 25.1456 28.9358 25.1456H30.9788C31.531 25.1352 31.9873 25.5422 32.0003 26.0556C32.0003 26.0685 32.0003 26.0815 32.0003 26.097V31.8007" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M36.0859 24.1993V31.8007" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M27.9141 28.9515H32" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M40.1719 28H47.3222C48.4267 27.9793 49.3419 28.7933 49.3652 29.8226C49.3652 29.8485 49.3652 29.8744 49.3652 29.9004V33.7011" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M14.6348 22.2963C15.7631 22.2963 16.6777 21.4455 16.6777 20.3959C16.6777 19.3464 15.7631 18.4956 14.6348 18.4956C13.5065 18.4956 12.5918 19.3464 12.5918 20.3959C12.5918 21.4455 13.5065 22.2963 14.6348 22.2963Z" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M49.3652 37.5044C50.4935 37.5044 51.4082 36.6536 51.4082 35.6041C51.4082 34.5545 50.4935 33.7037 49.3652 33.7037C48.2369 33.7037 47.3223 34.5545 47.3223 35.6041C47.3223 36.6536 48.2369 37.5044 49.3652 37.5044Z" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <path d="M13.6133 30.8519V32.7522M50.3866 23.2478V25.1481" stroke="#1E1E1E" stroke-width="2" stroke-linejoin="round" />
                                                <defs>
                                                    <filter id="filter0_d_480_173" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy="4" />
                                                        <feGaussianBlur stdDeviation="2" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0196078 0 0 0 0 0.321569 0 0 0 0.2 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_480_173" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_480_173" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <h3 class="mb-0 mt-lg-3 mt-md-3 mt-0">Predective and
                                                automated scheduling with AI.
                                            </h3>
                                        </div>
                                    </div>
                                    <div
                                        class="col-lg-4 col-md-4 col-sm-12 col-12 mt-lg-0">
                                        <div class="page_card">
                                            {/* <img src="images/Streamlined.png" alt="" /> */}
                                            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 64 64" fill="none">
                                                <g filter="url(#filter0_d_480_155)">
                                                    <path d="M41.3333 0H22.6667C12.3574 0 4 8.35735 4 18.6667V37.3333C4 47.6426 12.3574 56 22.6667 56H41.3333C51.6426 56 60 47.6426 60 37.3333V18.6667C60 8.35735 51.6426 0 41.3333 0Z" fill="white" />
                                                </g>
                                                <path d="M44.1459 18.5733L36.7544 11.1559C36.534 10.9356 36.2333 10.8111 35.9222 10.8111H21.7174C20.5014 10.8111 19.5137 11.7989 19.5137 13.0148V42.9852C19.5137 44.2011 20.5014 45.1889 21.7174 45.1889H42.287C43.5029 45.1889 44.4907 44.2011 44.4907 42.9852V19.403C44.4907 19.0919 44.3663 18.7937 44.1485 18.5733H44.1459ZM37.0681 14.8296L40.4826 18.2285H37.0681V14.8296ZM21.8626 42.84V13.16H34.7192V18.3737C34.7192 19.5896 35.7355 20.58 36.9489 20.58H42.1366V42.8374H21.8626V42.84Z" fill="#1E1E1E" />
                                                <path d="M30.8247 34.0226H33.1762V40.193H30.8247V34.0226ZM25.2402 31.0852H27.5917V40.193H25.2402V31.0852ZM36.4065 28.8815H38.758V40.1956H36.4065V28.8815ZM35.0273 24.7437L36.4091 23.1363L38.1928 24.6685L36.811 26.2759L35.0273 24.7437ZM31.6621 28.6637L26.731 26.6363L25.8365 28.8115L31.5532 31.163C31.9991 31.347 32.5773 31.2096 32.891 30.8415L35.7039 27.567L33.9202 26.0348L31.6621 28.6637Z" fill="#1E1E1E" />
                                                <defs>
                                                    <filter id="filter0_d_480_155" x="0" y="0" width="64" height="64" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                                        <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                                        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                                        <feOffset dy="4" />
                                                        <feGaussianBlur stdDeviation="2" />
                                                        <feComposite in2="hardAlpha" operator="out" />
                                                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.0196078 0 0 0 0 0.321569 0 0 0 0.2 0" />
                                                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_480_155" />
                                                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_480_155" result="shape" />
                                                    </filter>
                                                </defs>
                                            </svg>
                                            <h3 class="mb-0 mt-lg-3 mt-md-3 mt-0">Streamlined
                                                executive reporting and
                                                documentation.</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="col-xl-6 col-lg-6 col-md-12 d-flex align-items-center justify-content-center col-sm-12 col-12">
                            <div class="surface_img">
                                <img src="images/Reporting.png" width="100%" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="data_drive">
                <div class="container">
                    <div class="row g-4">
                        <div
                            class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 mt-lg-0">
                            <img src="images/data_driver.png" width="100%" alt="" />
                        </div>
                        <div
                            class="col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12 d-flex align-items-center mt-lg-0">
                            <div class="section_content">
                                <div class="product_card_ingo p-0">
                                    <h2 class="mb-lg-4 mb-md-4 mb-3">Data driven decisions for an
                                        efficient workflow.</h2>
                                    <p className='mb-0'>Generate customizable reports, monitoring
                                        summaries and access them everywhere at
                                        anytime through our website.</p>
                                    <button
                                        class="btn btn-outline-primary mt-xl-5 mt-lg-5 px-4  py-3 mt-md-4 mt-4"
                                        onClick={(e) => openModal(e, 'demo')}>Book
                                        a demo NOW</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Modal
                isOpen={modalIsOpen && modalType === 'quote'}
                onRequestClose={closeModal}
                class="modal custom_modal"
            >
                <RequestModel closeModal={closeModal} />
            </Modal>
            <Modal
                isOpen={modalIsOpen && modalType === 'demo'}
                onRequestClose={closeModal}
                class="modal custom_modal"
            >
                <ScheduleModel closeModal={closeModal} />
            </Modal>

        </div>
    )
}

export default Reporting