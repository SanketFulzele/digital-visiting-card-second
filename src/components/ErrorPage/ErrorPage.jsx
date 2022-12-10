import React from 'react';
import "./errorPage.css";

const ErrorPage = () => {
    return (
        <>

            <div className='error-container'>
                <div className="error-img-box">
                    <img src="/images/error.jpg" className='error-img' alt="Error_Image" />
                </div>
                <div className="error-text-box">
                    <h3>THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST</h3>
                </div>
            </div>
        </>
    )
}

export default ErrorPage
