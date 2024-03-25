import React, { useContext, useEffect } from 'react'
import { CarttContext } from '../../Context/Cartt'
import Spinner from '../Spinner/Spinner'
import { Link, useNavigate } from 'react-router-dom'
import Product from './../Product/Product';
import { Helmet } from 'react-helmet';

export default function Cart() {
  let { allCartProduct, totalCartPrice, deleteSpecificProduct, clearCart, updateCountitems } = useContext(CarttContext)
  let Navigate = useNavigate()




  if (!allCartProduct) {
    return <div className=' d-flex flex-column justify-content-center '>

      <h1 className='text-main pt-5  w-100 m-auto text-center align-self-start'>Empty Cart</h1>

      <div className=' vh-100  d-flex flex-column justify-content-center align-items-center'> <Spinner /> </div>


    </div>
  }


  async function deleteItem(id) {
    await deleteSpecificProduct(id)
  }
  async function clear() {
    await clearCart()
    Navigate("/home")
  }






  return (
    <div className="container py-5">
      <div className="row align-items-center justify-content-between">
        <div className="col-md-10">
          <h2>Shop Cart:</h2>
          <p className='text-main h5'>Total Cart Price: {totalCartPrice} EGP</p></div>
        <div className="col-md-2 d-flex flex-column-reverse  align-items-center justify-content-center ">
          <button onClick={() => clear()} className='btn btn-danger '>Clear Cart</button>
          <Link to={"/payment"} className=' mb-2 '>
            <button className='btn btn-primary bg-main'> Confirm Payment </button>
          </Link>
        </div>

      </div>
      {allCartProduct.map((ele, ind) => <div className="row mt-5 align-items-center" key={ind}>

        <div className="col-md-2">
          <img src={ele.product.imageCover} className='w-100 img-fluid' alt="" />
        </div>
        <div className="col-md-8">
          <h5>{ele.product.title}</h5>
          <p>price : {ele.price} EGP</p>
          <p>price : {ele.count} EGP</p>
          <p>price : {ele._id} EGP</p>
          <p onClick={() => deleteItem(ele.product.id)} className='text-main cursor-pointer'><i className="fa-solid fa-trash"></i> remove</p>
        </div>
        <div className="col-md-2 d-flex align-items-center  justify-content-between ">
          <button onClick={() => updateCountitems(ele.product.id, ele.count + 1)} className='btn btn-outline-success px-2 py-1 me-2'>+</button>
          <p className='pt-3'>{ele.count}</p>

          <button onClick={() => updateCountitems(ele.product.id, ele.count - 1)} className='btn btn-outline-success px-2 py-1 ms-2'>-</button>
        </div>
      </div>)}

      <Helmet>
        <title>Cart</title>
      </Helmet>
    </div>
  )
}
