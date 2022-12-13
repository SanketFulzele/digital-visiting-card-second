import { TextField } from '@mui/material';
import "./contact.css";
import { Formik } from 'formik';
import * as Yup from "yup";
import "yup-phone";
import { Box } from '@mui/system';
import ReCAPTCHA from 'react-google-recaptcha';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const [verified, setVerified] = useState(false);

    // inital login credentials
    const initialValues = {
        name: "",
        email: "",
        number: "",
        message: "",
    };

    // form field validation schema
    const validationSchema = Yup.object().shape({
        name: Yup.string().min(2).max(25).required("Full Name is Required !"),
        email: Yup.string().email('Invalid Email address').required('Email Address is Required !'),
        number: Yup.string().required("Mobile Number is Required")
            .max(10, "Mobile Number is Too Long").phone('IN', true, "Phone Number is Invalid"),
        message: Yup.string().min(8).required("Message is Required !"),
    });

    const handleCaptchaChange = () => {
        console.log("captcha hit")
        setVerified(true);
    }


    const URL = `http://meripahchaan.in/admin/index.php/Master/saveContact`;

    const handleFormSubmit = (values, onSubmitProps) => {
        console.log(values, "values")

        const data = {
            "name": values.name,
            "email": values.email,
            "number": values.number,
            "message": values.message,
        }

        console.log(data, "data")

        fetch(URL, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }).then(result => {
            result.json().then(resp => {
                if(resp.success === 1 ){
                    notifySuccess();
                }else {
                    notifyError();
                }
            }).then(() => {
                onSubmitProps.resetForm();
            })
        })

        onSubmitProps.resetForm();
    }

    const notifyError = () => {
        toast.error('Something Wrong! ', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }

    const notifySuccess = () => {
        toast.success('Message Sent Successfully', {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
        });
    }


    return (
        <div>
            <div className="contact-section">
                <div className="contact-box">
                    <h1 className='contact-heading'>Contact Us</h1>

                    <div className="form-container">
                        <div className='form-box'>
                            <Formik
                                onSubmit={handleFormSubmit}
                                initialValues={initialValues}
                                validationSchema={validationSchema}
                            >
                                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, }) => (
                                    <form onSubmit={handleSubmit}>

                                        <TextField
                                            fullWidth
                                            type="text"
                                            name="name"
                                            label="Full Name"
                                            variant="outlined"
                                            onBlur={handleBlur}
                                            value={values.name}
                                            onChange={handleChange}
                                            helperText={touched.name && errors.name}
                                            error={Boolean(errors.name && touched.name)}
                                            sx={{ mb: 3 }}
                                            color="success"
                                        />

                                        <TextField
                                            fullWidth
                                            type="email"
                                            name="email"
                                            label="Email Address"
                                            variant="outlined"
                                            onBlur={handleBlur}
                                            value={values.email}
                                            onChange={handleChange}
                                            helperText={touched.email && errors.email}
                                            error={Boolean(errors.email && touched.email)}
                                            sx={{ mb: 3 }}
                                            color="success"
                                        />

                                        <TextField
                                            fullWidth
                                            type="number"
                                            name="number"
                                            label="Mobile Number"
                                            variant="outlined"
                                            onBlur={handleBlur}
                                            value={values.number}
                                            onChange={handleChange}
                                            helperText={touched.number && errors.number}
                                            error={Boolean(errors.number && touched.number)}
                                            sx={{ mb: 3 }}
                                            color="success"
                                        />

                                        <TextField
                                            fullWidth
                                            type="text"
                                            name="message"
                                            label="Please Enter Message"
                                            variant="outlined"
                                            onBlur={handleBlur}
                                            value={values.message}
                                            onChange={handleChange}
                                            helperText={touched.message && errors.message}
                                            error={Boolean(errors.message && touched.message)}
                                            color="success"
                                            multiline
                                            rows={5}
                                            sx={{ mb: 3 }}
                                        />

                                        <div className='captcha-box'>
                                            <ReCAPTCHA sitekey='6LemmFEjAAAAAJR3hDOzCiUYhZ67Eo4qeMl9K5M7' onChange={handleCaptchaChange} />
                                        </div>

                                        <Box className="button-container">
                                            <button type="submit"
                                                //  disabled={`${verified ? `false` : `true`}`}
                                                // disabled={false}
                                                className={`contact-btn ${verified ? "normal" : "opacity"}`}  >
                                                Submit
                                            </button>
                                        </Box>
                                    </form>
                                )}
                            </Formik>

                            <ToastContainer
                                position='top-right'
                                autoClose={2000}
                                hideProgressBar={false}
                                newestOnTop={false}
                                closeOnClick
                                rtl={false}
                                pauseOnFocusLoss
                                draggable
                                theme='dark'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
