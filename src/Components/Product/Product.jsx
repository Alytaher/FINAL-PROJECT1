import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import Spinner from '../Spinner/Spinner'
import { Link } from 'react-router-dom'
import { CarttContext } from '../../Context/Cartt'
import toast from 'react-hot-toast'
import { Helmet } from 'react-helmet'

export default function Product() {

  let { addToCart } = useContext(CarttContext)
  function getAllProducts() {
    return axios.get("https://ecommerce.routemisr.com/api/v1/products")
  }

  let { data, isLoading, isError } = useQuery("getAllProducts", getAllProducts)


  if (isLoading) {

    return <div className=' vh-100 d-flex justify-content-center align-items-center '><Spinner /></div>
  }

  async function addToMyCart(id) {
    let res = await addToCart(id)
    

  }
  return (
    <>
      <div className="container">
        <div className="row gy-5">
          {data?.data.data.map((pro, indx) => <div key={indx} className="mainBox col-md-2">
            <Link to={`/productDetails/${pro.id}`} className="product cursor-pointer ">
              <img className='w-100' src={pro.imageCover} alt="" />
              <div className="text p-2 ">
                <p className='text-main h6 mb-3'>{pro.category.name}</p>
                <h5 className='font-sm mb-2'>{pro.title.split(" ").splice(0, 2).join("")}</h5>
                <div className="price d-flex justify-content-between">
                  <div>{pro.price}EGP</div>
                  <div><span><i className="fa-solid fa-star rating-color me-1"></i></span>{pro.ratingsAverage}</div>
                </div>
              </div>
            </Link>
            <button onClick={() => addToMyCart(pro.id)} className='bttn btn btn-success w-100'>+add to cart</button>
          </div>)}

        </div>
      </div>
      <Helmet>
        <title>product</title>
      </Helmet>
    </>
  )
}
