import React, { useState } from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
import HeaderModel from '../Layout/HeaderModel';
// import { toast } from 'react-toastify';

const Schema = z.object({
    firstName: z
        .string()
        .min(1, { message: "First Name is required" })
        .refine((value) => !/\d/.test(value), {
            message: "First Name should not contain numbers",
        })
        .refine((value) => !/\s/.test(value), {
            message: "First Name should not contain space",
        }),
    lastName: z
        .string()
        .min(1, { message: "Last Name is required" })
        .refine((value) => !/\d/.test(value), {
            message: "Last Name should not contain numbers",
        })
        .refine((value) => !/\s/.test(value), {
            message: "Last Name should not contain space",
        }),
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email("Invalid Email address"),
    organisation: z.string().min(1, { message: "Organization  is required" }),
    designation: z.string().min(1, { message: "Designation  is required" }),

})

const WebinarDetailsModel = ({ closeModal }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        // setValue,
    } = useForm({
        resolver: zodResolver(Schema),
    });

    const [load, setLoad] = useState(false);

    const onSubmit = async (values) => {
        setLoad(true)
        try {
            const response = await fetch('https://ay7hxe7tw6.execute-api.us-east-1.amazonaws.com/prod/api/webinarDetails', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            closeModal()
            // toast.success('Request submitted successfully!');
        } catch (error) {
            // toast.error('Failed to submit. Please try again later.');
        }
        setLoad(false);
    };
    return (
        <div
            className="modal custom_modal d-flex show fade align-items-lg-center align-items-md-center px-lg-0 px-md-3 px-0 align-items-start justify-content-center">
            <div className="modal-dialog_Webinar">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className='d-lg-none modal_header d-md-none d-block'>
                            <HeaderModel />
                        </div>
                        <div className="row modal_body g-xl-5 g-lg-4 g-md-5 g-4 flex-lg-row flex-md-row flex-column-reverse">
                            <div
                                className="col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
                                <div className="section_content detail_product_card">
                                    <hr className='d-lg-none d-md-none d-block contact_sep my-2 mb-4' />
                                    {/* <button className="btn btn-outline-primary webinar_btn mb-4">
                                        <span className='span_webinar'>LIVE WEBINAR</span></button> */}
                                    {/* <div className='d-flex webinar_update flex-wrap modal_webinary align-items-center gap-3 mb-4'>
                                        <p className=' px-4 py-2 mb-0'><b>LIVE WEBINAR</b></p>
                                    </div> */}
                                    <h3 className='d-lg-block d-md-block d-none m-0'>
                                        <b><span className='text_div'>Essential Strategies for<br /> Infection Control in
                                            Nursing Homes and Long-Term Care Facilities.</span></b></h3>
                                    <div className="mt-lg-4 mt-md-4 mt-0 pt-lg-0 pt-md-0 pt-3">
                                        <div>
                                            <p
                                                className="d-flex align-items-center gap-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                                    <path d="M7.01428 7.5H17.9M6.27142 1.5V3.30022M18.5 1.5V3.3M22.1 6.3L22.1 19.5001C22.1 21.157 20.7568 22.5001 19.1 22.5001H5.89999C4.24314 22.5001 2.89999 21.157 2.89999 19.5001V6.3C2.89999 4.64315 4.24314 3.3 5.89999 3.3H19.1C20.7568 3.3 22.1 4.64314 22.1 6.3Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                                {/* <b>Monday,June 10 2024</b> */}
                                            </p>
                                            <div className="mt-3">
                                                <h3 className="mb-1 font-300">Monday,June 10 2024</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-lg-4 mt-md-4 mt-4">
                                        <div>
                                            <p
                                                className="d-flex align-items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none">
                                                    <path
                                                        d="M15.2842 15.3487C15.8081 15.5233 16.3744 15.2402 16.5491 14.7162C16.7237 14.1923 16.4406 13.626 15.9166 13.4513L15.2842 15.3487ZM12.0004 13.2H11.0004C11.0004 13.6304 11.2758 14.0126 11.6842 14.1487L12.0004 13.2ZM13.0004 8.18226C13.0004 7.62998 12.5527 7.18226 12.0004 7.18226C11.4481 7.18226 11.0004 7.62998 11.0004 8.18226H13.0004ZM15.9166 13.4513L12.3166 12.2513L11.6842 14.1487L15.2842 15.3487L15.9166 13.4513ZM13.0004 13.2V8.18226H11.0004V13.2H13.0004ZM20.6004 12C20.6004 16.7496 16.75 20.6 12.0004 20.6V22.6C17.8546 22.6 22.6004 17.8542 22.6004 12H20.6004ZM12.0004 20.6C7.25074 20.6 3.40039 16.7496 3.40039 12H1.40039C1.40039 17.8542 6.14617 22.6 12.0004 22.6V20.6ZM3.40039 12C3.40039 7.25035 7.25074 3.4 12.0004 3.4V1.4C6.14617 1.4 1.40039 6.14578 1.40039 12H3.40039ZM12.0004 3.4C16.75 3.4 20.6004 7.25035 20.6004 12H22.6004C22.6004 6.14578 17.8546 1.4 12.0004 1.4V3.4Z"
                                                        fill="black" />
                                                </svg>
                                                {/* <b>Operational hours</b> */}
                                            </p>
                                            <div className="mt-3">
                                                <h3
                                                    className="font-300">02:00PM EST</h3>
                                                {/* <p
                                            className="mb-0">Monday to
                                            Friday</p> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-6 col-lg-6 col-md-6 col-12 pt-lg-0 pt-md-0 pt-2">
                                <div className="section_content">
                                    <h2 className='d-lg-none d-md-none d-block mb-4 pb-2'>Essential Strategies for Infection Control in
                                        Nursing Homes and Long-Term Care Facilities</h2>
                                </div>
                                <form className="form_field" onSubmit={handleSubmit(onSubmit)}>
                                    <div className="row">
                                        <div
                                            className="col-lg-6 col-md-6 col-sm-12 col-12">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="form-label mb-1">Your
                                                name <span style={{ color: "#FF0000" }}>*</span></label>
                                            <input type="text"
                                                className={`form-control ${errors.firstName ? "is-invalid" : ""
                                                    }`}
                                                id="firstName"
                                                placeholder="First name"
                                                {...register("firstName", {
                                                    onBlur: () => trigger("firstName"),
                                                    onChange: () => trigger("firstName"),
                                                })} />
                                            {errors.firstName && (
                                                <div className="invalid-feedback">
                                                    {errors.firstName.message}
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className="col-lg-6 col-md-6 col-sm-12 col-12 flex-column d-flex align-items-start justify-content-start mt-lg-0 mt-md-0 mt-2 name_input">
                                            <input type="text"
                                                className={`form-control ${errors.lastName ? "is-invalid" : ""
                                                    }`}
                                                id="lastName"
                                                placeholder="Last name"
                                                {...register("lastName", {
                                                    onBlur: () => trigger("lastName"),
                                                    onChange: () => trigger("lastName"),
                                                })} />
                                            {errors.lastName && (
                                                <div className="invalid-feedback">
                                                    {errors.lastName.message}
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className="col-12 mt-2">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="form-label mb-1">Email
                                                address <span style={{ color: "#FF0000" }}>*</span></label>
                                            <input type="email"
                                                className={`form-control ${errors.email ? "is-invalid" : ""
                                                    }`}
                                                id="email"
                                                placeholder="Type in your company email ID"
                                                {...register("email", {
                                                    onBlur: () => trigger("email"),
                                                    onChange: () => trigger("email"),
                                                })} />
                                            {errors.email && (
                                                <div className="invalid-feedback">
                                                    {errors.email.message}
                                                </div>
                                            )}
                                        </div>

                                        <div
                                            className="col-12 mt-2">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="form-label mb-1">Organization
                                                <span style={{ color: "#FF0000" }}>*</span></label>
                                            <input type="text"
                                                className={`form-control ${errors.organisation ? "is-invalid" : ""
                                                    }`}
                                                id="organisation"
                                                placeholder
                                                {...register("organisation", {
                                                    onBlur: () => trigger("organisation"),
                                                    onChange: () => trigger("organisation"),
                                                })} />
                                            {errors.organisation && (
                                                <div className="invalid-feedback">
                                                    {errors.organisation.message}
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className="col-12 mt-2">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="form-label mb-1">Designation
                                                <span style={{ color: "#FF0000" }}>*</span></label>
                                            <input type="text"
                                                className={`form-control ${errors.designation ? "is-invalid" : ""
                                                    }`}
                                                id="designation"
                                                placeholder
                                                {...register("designation", {
                                                    onBlur: () => trigger("designation"),
                                                    onChange: () => trigger("designation"),
                                                })} />
                                            {errors.designation && (
                                                <div className="invalid-feedback">
                                                    {errors.designation.message}
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className="col-12 mt-lg-4 d-flex flex-lg-row gap-3 flex-md-row flex-column-reverse pt-lg-3 mt-md-4 mt-md-4 mt-4 pt-lg-0 pt-md-0 pt-2">
                                            <button
                                                className="btn btn-outline-primary py-3 w-100 px-4" onClick={closeModal}>Cancel</button>
                                            <button
                                                className="btn btn-primary outline-dark w-100 py-3 px-4">
                                                {load ? (
                                                    <div className="loading-spinner loader"></div>
                                                ) : (
                                                    "Submit"
                                                )}</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className='d-lg-none d-md-none d-block'>
                            <Footer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebinarDetailsModel