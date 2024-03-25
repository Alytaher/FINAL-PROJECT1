import React, { useContext } from 'react'
import { CarttContext } from '../../Context/Cartt'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { Helmet } from 'react-helmet'

export default function Payment() {


    let { cartId, getDataFromCart, clearCart } = useContext(CarttContext)
    let nav = useNavigate()
    function confrimCashOrder() {
        let details = document.getElementById("details").value
        let phone = document.getElementById("phone").value
        let city = document.getElementById("city").value


        let objectBody = {
            "shippingAddress": {
                details,
                phone,
                city
            }
        }
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/${cartId}`, objectBody, {
            headers: { token: localStorage.getItem("userToken") }
        }).then((res) => {

            if (res.data.status == "success") {
                toast.success("Payment Compeleted successfully")
                getDataFromCart()
                clearCart()
                setTimeout(() => {
                    nav("/home")
                }, 1500)
            }
        }).catch((err) => {
            // toast.err("Payment Error")

        })
    }
    function confrimOnlineOrder() {
        let details = document.getElementById("details").value
        let phone = document.getElementById("phone").value
        let city = document.getElementById("city").value


        let objectBody = {
            "shippingAddress": {
                details,
                phone,
                city
            }
        }
        axios.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cartId}`, objectBody, {
            headers: { token: localStorage.getItem("userToken") }

            , params: {
                url: "http://localhost:3000"
            }
        }

        ).then((res) => {

            if (res.data.status == "success") {
                window.open(res.data.session.url, "_slef")
                getDataFromCart()
                clearCart()
            }

        }).catch((err) => {
            // toast.err("Payment Error")



        })
    }



    return (
        <div className="container py-5 w-75">
            <h2 className='text-main mb-3'>Confirm Payment</h2>

            <label htmlFor='city'>city</label>
            <input type="text" id='city' className='form-control mb-3' placeholder='City' />
            <label htmlFor='phone'>phone</label>
            <input type="text" id='phone' className='form-control mb-3' placeholder='phone' />
            <label htmlFor='details'>details</label>
            <input type="text" id='details' className='form-control mb-3' placeholder='details' />
            <div className="d-flex justify-content-between align-items-center">
                <button onClick={() => confrimCashOrder()} className='btn btn-primary bg-main'>Confirm Cash Payment</button>
                <button onClick={() => confrimOnlineOrder()} className='btn btn-primary bg-main  '>Confirm Online Payment</button>

            </div>
            <Helmet>
                <title>Payment</title>
            </Helmet>
        </div>
    )
}
