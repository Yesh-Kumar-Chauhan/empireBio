import React,{useState} from 'react'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Header from '../Layout/Header';
import Footer from '../Layout/Footer';
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
    phoneNo: z.string()
    // .min(1, { message: "Phone number is required" })
    // .length(10, { message: "Phone number should be exactly 10 characters long" })
    ,
    email: z
        .string()
        .min(1, { message: "Email is required" })
        .email("Invalid Email address"),
    organisation: z.string().min(1, { message: "Organization  is required" }),
    destination: z.string().min(1, { message: "Designation  is required" }),
    message: z.string(),

})

const ScheduleModel = ({ closeModal, type }) => {
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
            const response = await fetch('https://ay7hxe7tw6.execute-api.us-east-1.amazonaws.com/prod/api/schedule', {
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
        setLoad(false)
    };
    return (
        <div
            className="modal custom_modal d-flex show fade align-items-start justify-content-center">
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-body">
                        <div className='d-lg-none modal_header d-md-none d-block'>
                            <Header />
                        </div>
                        <div className="row modal_body g-xl-5 g-lg-4 g-md-5 g-4 flex-lg-row flex-md-row flex-column-reverse">
                            <div
                                className="col-xl-5 col-lg-5 col-md-5 col-sm-12 col-12">
                                <div className="section_content">
                                    <hr className='d-lg-none d-md-none d-block contact_sep my-2' />
                                    <h2 className='d-lg-block d-md-block d-none'>Schedule a
                                        demo.</h2>
                                    <div className="mt-lg-5 mt-md-4 mt-0 pt-lg-0 pt-md-0 pt-4">
                                        <div>
                                            <p
                                                className="d-flex align-items-center gap-2"><svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none">
                                                    <path
                                                        d="M20.6638 18.771C20.6638 18.771 19.5052 19.909 19.2212 20.2426C18.7587 20.7362 18.2137 20.9693 17.4992 20.9693C17.4305 20.9693 17.3573 20.9693 17.2886 20.9647C15.9284 20.8779 14.6644 20.3477 13.7164 19.8953C11.1243 18.643 8.84819 16.8651 6.95678 14.6119C5.3951 12.7335 4.35093 10.9968 3.6594 9.13211C3.23349 7.99409 3.07778 7.10744 3.14647 6.27107C3.19227 5.73634 3.39835 5.29302 3.77847 4.91368L5.34015 3.35519C5.56455 3.14496 5.8027 3.0307 6.03626 3.0307C6.32478 3.0307 6.55835 3.20437 6.7049 3.35062C6.70948 3.35519 6.71406 3.35977 6.71864 3.36434C6.998 3.62485 7.26362 3.8945 7.54298 4.18243C7.68495 4.32868 7.8315 4.47493 7.97805 4.62575L9.22831 5.87345C9.71376 6.35791 9.71376 6.8058 9.22831 7.29026C9.0955 7.4228 8.96727 7.55534 8.83446 7.68331C8.44976 8.07636 8.75196 7.77477 8.35353 8.13126C8.34437 8.1404 8.33521 8.14497 8.33063 8.15411C7.93677 8.54716 8.01005 8.93107 8.09248 9.19158C8.09706 9.20529 8.10164 9.219 8.10622 9.23271C8.43138 10.0188 8.88935 10.7592 9.58547 11.6413L9.59005 11.6459C10.854 13.1998 12.1867 14.4109 13.6568 15.3387C13.8446 15.4575 14.0369 15.5535 14.2201 15.6449C14.385 15.7272 14.5407 15.8049 14.6735 15.8871C14.6918 15.8963 14.7101 15.91 14.7285 15.9191C14.8842 15.9968 15.0307 16.0334 15.1819 16.0334C15.562 16.0334 15.8001 15.7957 15.878 15.718L16.7757 14.8222C16.9314 14.6668 17.1787 14.4794 17.4672 14.4794C17.7511 14.4794 17.9847 14.6576 18.1267 14.813C18.1312 14.8176 18.1312 14.8176 18.1358 14.8222L20.6592 17.3404C21.1309 17.8066 20.6638 18.771 20.6638 18.771Z"
                                                        stroke="black"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                <b>Call us </b>
                                            </p>
                                            <div className="mt-3">
                                                <p className="mb-1">Toll Free: 1
                                                    (833) 455-7700</p>
                                                <p className="mb-1">Local: 1 (516)
                                                    696-0822</p>
                                                <p className="mb-0">Fax: (516)
                                                    248-6456</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-lg-5 mt-md-4 mt-4">
                                        <div>
                                            <p
                                                className="d-flex align-items-center gap-2">
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24" height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none">
                                                    <path
                                                        d="M3.60039 6.10435L12.0004 11.5044L21.0004 6.10435M4.80039 19.0957C3.47491 19.0957 2.40039 18.0211 2.40039 16.6957V7.30435C2.40039 5.97887 3.47491 4.90435 4.80039 4.90435H19.2004C20.5259 4.90435 21.6004 5.97887 21.6004 7.30435V16.6957C21.6004 18.0211 20.5259 19.0957 19.2004 19.0957H4.80039Z"
                                                        stroke="black"
                                                        stroke-width="2"
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round" />
                                                </svg>
                                                <b>Email</b>
                                            </p>
                                            <div className="mt-3">
                                                <p
                                                    className="mb-0">info@ebdny.com</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-lg-5 mt-md-4 mt-4">
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
                                                <b>Operational hours</b>
                                            </p>
                                            <div className="mt-3">
                                                <p
                                                    className="mb-2">8:00 AM to 4:00
                                                    PM EST</p>
                                                <p
                                                    className="mb-0">Monday to
                                                    Friday</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-7 col-md-7 col-12">
                                <div className="section_content">
                                    <h2 className='d-lg-none d-md-none d-block mb-4 pb-2'>Schedule a demo.</h2>
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
                                                className="form-label mb-1">Phone
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
                                                className={`form-control ${errors.destination ? "is-invalid" : ""
                                                    }`}
                                                id="destination"
                                                placeholder
                                                {...register("destination", {
                                                    onBlur: () => trigger("destination"),
                                                    onChange: () => trigger("destination"),
                                                })} />
                                            {errors.destination && (
                                                <div className="invalid-feedback">
                                                    {errors.destination.message}
                                                </div>
                                            )}
                                        </div>
                                        <div
                                            className="col-12 mt-2">
                                            <label
                                                for="exampleFormControlInput1"
                                                className="form-label mb-1">Message
                                            </label>

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
                                            className="col-12 mt-lg-4 d-flex flex-lg-row gap-3 flex-md-row flex-column-reverse pt-lg-3 mt-md-4 mt-md-4 mt-4 pt-lg-0 pt-md-0 pt-2">
                                            <button
                                                className="btn btn-outline-primary py-3 w-100 px-4" onClick={closeModal}>Cancel</button>
                                            <button
                                                className="btn btn-primary outline-dark w-100 py-3 px-4">
                                                    {load ? (
                                                    <div className="loading-spinner loader"></div>
                                                ) : (
                                                    "Submit"
                                                )}
                                                </button>
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

export default ScheduleModel