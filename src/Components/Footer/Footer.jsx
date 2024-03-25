import React from 'react'

export default function Footer() {
    return (
        <div className="container-fluid py-5 bg-body-tertiary px-5">
            <h3 className=' fw-bold text-main'>Get the FreshCart app</h3>
            <p>we will send you a link,open it on your phone to download the app.</p>

            <div className="row align-items-center justify-content-between mb-4">
                <div className="col-md-9">
                    <input type="email" className='form-control' placeholder='Email..' />
                </div>
                <div className="col-md-3 ">
                    <button className='btn w-75  btn-success bg-main d-block'>Share App Link</button>
                </div>
            </div>

            <div className="row align-items-center justify-content-between py-2">
                <div className="col-md-4">
                    <span className='me-2'>Payment Partner</span>
                    <span className='me-2'><i className="text-main fa-brands fa-amazon-pay"></i></span>
                    <span className='me-2'><i className="text-main fa-brands fa-cc-paypal"></i></span>
                    <span className='me-2'><i className="text-main fa-brands fa-cc-mastercard"></i></span>
                </div>
                <div className="col-md-4 ">
                    <span className='me-2'>Get deliveries with FreshCart</span>
                    <span className='me-2'><i className=" text-main fa-brands fa-app-store"></i></span>
                    <span className='me-2'><i className=" text-main fa-brands fa-google-play"></i></span>
                </div>
            </div>
        </div>
    )
}
