import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Register from './../Register/Register';
import imgLogo from "../../assits/images/freshcart-logo.svg"
import Spinner from '../Spinner/Spinner';
import { CarttContext } from '../../Context/Cartt';

export default function Navbar() {

    let { numOfCartItems } = useContext(CarttContext)

    let Navigate = useNavigate()
    function logOut() {
        localStorage.removeItem("userToken")
        Navigate("/login")

    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary pt-4">
                <div className="container-fluid">
                    <div className="logo">
                        <Link to={"home"} className="navbar-brand"><img src={imgLogo} alt=''></img></Link>
                    </div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            {localStorage.getItem("userToken") !== null ? <> <li className="nav-item">
                                <Link to={"home"} className="nav-link active" aria-current="page" href="#">Home</Link>
                            </li>
                                {numOfCartItems ? <li className="nav-item ">
                                    <Link to={"cart"} className="nav-link position-relative">Cart

                                        <span className="position-absolute top-0 px-1  translate-middle  bg-main text-white  rounded-circle">
                                            {numOfCartItems}

                                        </span>

                                    </Link>
                                </li> : <li className="nav-item ">
                                    <Link to={"cart"} className="nav-link ">Cart</Link>
                                </li>}
                                <li className="nav-item">
                                    <Link to={"product"} className="nav-link">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"category"} className="nav-link">Category</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to={"brands"} className="nav-link">Barnds</Link>
                                </li></> : <></>}



                        </ul>
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">

                            {localStorage.getItem("userToken") !== null ? <>  <li className="nav-item px-2">
                                <i className="fa-brands fa-instagram"></i>
                            </li>
                                <li className="nav-item px-2">
                                    <i className="fa-brands fa-facebook"></i>
                                </li>
                                <li className="nav-item px-2">
                                    <i className="fa-brands fa-tiktok"></i>
                                </li>
                                <li className="nav-item px-2">
                                    <i className="fa-brands fa-twitter"></i>
                                </li>
                                <li className="nav-item px-2">
                                    <i className="fa-brands fa-linkedin"></i>
                                </li>
                                <li className="nav-item px-2">
                                    <i className="fa-brands fa-youtube"></i>
                                </li>
                                <li className="nav-item">
                                    <button onClick={() => logOut()} className="nav-link"> Logout </button>
                                </li>

                                <li className="nav-item">
                                    <Link to={"/profile"} className="nav-link d-flex  align-items-center ">
                                        <div className='port px-2'>
                                            <i className="fa-solid fa-user"></i>
                                        </div>
                                        <div className='ms-2 '>profile</div>
                                    </Link>
                                </li></>


                                : <><li className="nav-item">
                                    <Link to={"register"} className="nav-link"> Register </Link>
                                </li>
                                    <li className="nav-item">
                                        <Link to={"login"} className="nav-link"> Login </Link>
                                    </li></>}



                        </ul>

                    </div>
                </div>
            </nav>

        </div>

    )

}
