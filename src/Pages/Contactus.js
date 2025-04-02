import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
// import { toast } from 'react-toastify';

const Schema = z.object({
    firstName: z.string().min(1, { message: "First Name is required" }).refine((value) => !/\d/.test(value), {
        message: "First Name should not contain numbers",
    }).refine((value) => !/\s/.test(value), {
        message: "First Name should not contain space",
    }),
    lastName: z
        .string().min(1, { message: "Last Name is required" }).refine((value) => !/\d/.test(value), {
            message: "Last Name should not contain numbers",
        })
        .refine((value) => !/\s/.test(value), {
            message: "Last Name should not contain space",
        }),
    phoneNo: z.string()
    // .min(1, { message: "Phone number is required" })
    //     .length(10, { message: "Phone number should be exactly 10 characters long" })
    ,
    email: z.string().min(1, { message: "Email is required" })
        .email("Invalid Email address"),
    organisation: z.string().min(1, { message: "Organization  is required" }),
    message: z.string().min(1, { message: "Message  is required" }),

})
const ContactUs = () => {

    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
        setValue,
        reset,
    } = useForm({
        resolver: zodResolver(Schema),
    });

    const [load, setLoad] = useState(false);

    const onSubmit = async (values) => {
        setLoad(true)
        try {
            const response = await fetch('https://ay7hxe7tw6.execute-api.us-east-1.amazonaws.com/prod/api/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(values),
            });
            reset()
            // toast.success('Request submitted successfully!');
        } catch (error) {
            // toast.error('Failed to submit. Please try again later.');
        }
        setLoad(false)
    };
    return (
        <div>
            <section class="siteBanner contact_banner">
                <div class="container">
                    <div class="row g-4 flex-lg-row flex-md-row flex-column-reverse">
                        <div
                            class="col-xl-3 col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-start">
                            <div class="section_content banner_content h-auto w-100">
                                <hr className='d-lg-none d-md-none d-block contact_sep' />
                                <h2 class="mb-lg-5 mb-md-4 mb-4 d-lg-block d-mb-block d-none">Contact us</h2>
                                <p class="mb-lg-5 mb-md-4 mb-3">280 Duffy Avenue<br />
                                    Hicksville, NY 11801</p>
                                {/* <p class="mb-2">Toll Free: 1 (833) 455-7700</p> */}
                                <p class="mb-2">Local: 1 (516) 696-0822</p>
                                <p class="mb-0">Fax: (516) 248-6456</p>
                                <p class="mt-lg-5 mt-md-4 mt-3 mb-0">info@ebdny.com</p>
                            </div>
                        </div>
                        <div class="col-xl-5 col-lg-6 col-md-6 col-sm-12 col-12 d-lg-block d-md-block d-none">
                            <div class="map">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.970117587308!2d-73.54450302415447!3d40.76268197138597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c280db7c6b03c7%3A0x4a737b3230bf3a54!2s280%20Duffy%20Ave%2C%20Hicksville%2C%20NY%2011801%2C%20USA!5e0!3m2!1sen!2sin!4v1709547317450!5m2!1sen!2sin"
                                    width="100%" height="505" style={{ border: "0" }}
                                    allowfullscreen loading="lazy"
                                    referrerpolicy="no-referrer-when-downgrade"></iframe>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-5 col-md-6 col-sm-12 col-12">
                            <div className='section_content banner_content h-auto'>
                                <h2 class="mb-lg-5 mb-md-4 mb-4 d-lg-none d-mb-none d-block">Contact us</h2>
                            </div>
                            <form class="form_field" onSubmit={handleSubmit(onSubmit)}>
                                <div class="row">
                                    <div
                                        class="col-lg-6 col-md-6 col-sm-12 col-12">
                                        <label
                                            for="exampleFormControlInput1"
                                            class="form-label mb-1">Your
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
                                        class="col-lg-6 col-md-6 col-sm-12 col-12 d-flex align-items-start justify-content-start name_input flex-column mt-lg-0 mt-md-0 mt-3">
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
                                        class="col-12 mt-3">
                                        <label
                                            for="exampleFormControlInput1"
                                            class="form-label mb-1">Email
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
                                        class="col-12 mt-3">
                                        <label
                                            for="exampleFormControlInput1"
                                            class="form-label mb-1">Phone
                                        </label>
                                        <input type="number"
                                            className={`form-control ${errors.phoneNo ? "is-invalid" : ""
                                                }`}
                                            id="phoneNo"
                                            placeholder
                                            {...register("phoneNo", {
                                                onBlur: () => trigger("phoneNo"),
                                                onChange: () => trigger("phoneNo"),
                                            })} />
                                        {errors.phoneNo && (
                                            <div className="invalid-feedback">
                                                {errors.phoneNo.message}
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        class="col-12 mt-3">
                                        <label
                                            for="exampleFormControlInput1"
                                            class="form-label mb-1">Organization
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
                                        class="col-12 mt-3">
                                        <label
                                            for="exampleFormControlInput1"
                                            class="form-label mb-1">Message
                                            <span style={{ color: "#FF0000" }}>*</span></label>

                                        <textarea className={`form-control ${errors.message ? "is-invalid" : ""
                                            }`}
                                            id='message'
                                            cols="30"
                                            rows="10"
                                            {...register("message", {
                                                onBlur: () => trigger("message"),
                                                onChange: () => trigger("message"),
                                            })}></textarea>
                                        {errors.message && (
                                            <div className="invalid-feedback">
                                                {errors.message.message}
                                            </div>
                                        )}
                                    </div>
                                    <div
                                        class="col-12 mt-lg-4 d-flex flex-lg-row gap-3 flex-md-row flex-column-reverse pt-lg-3 mt-md-4 mt-md-4 mt-4">
                                        <button
                                            class="btn btn-primary outline-dark py-3 px-4" style={{minWidth:'107px'}}>
                                                {load ? (
                                                    <div className="loading-spinner loader" ></div>
                                                ) : (
                                                    "Submit"
                                                )}</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ContactUs