import axios from 'axios'
import React, { useContext } from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'
import { CarttContext } from '../../Context/Cartt'
import { Helmet } from 'react-helmet'

export default function ProductDetails() {
    let { addToCart } = useContext(CarttContext)
    let { id } = useParams()

    function getSpiceficProduct() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    }

    let { data, isFetching, isError, isLoading } = useQuery("getSpiceficProduct", getSpiceficProduct)

    if (isLoading || isError || isFetching) {
        return <div className=' vh-100 d-flex justify-content-center align-items-center '><Spinner /></div>
    }

    async function addToMyCart(id) {
        let res = await addToCart(id)


    }
    return (
        <>
            <div className="conatainer py-3 px-3">

                <div className="row align-items-center justify-content-center">
                    <div className="col-md-3"><img src={data?.data.data.imageCover} className='w-100 img-fluid' alt="" /></div>
                    <div className="col-md-7">
                        <h2 className='h5 mb-3'>{data?.data.data.description}</h2>
                        <h3 className='mb-3 font-sm text-main-light \'>{data?.data.data.title}</h3>
                        <p>{data?.data.data.category.name}</p>
                        <div className='price d-flex justify-content-between'>
                            <p>{data?.data.data.price}EGP</p>
                            <p><span><i className="fa-solid fa-star rating-color me-1"></i></span>{data?.data.data.ratingsAverage}</p>
                        </div>
                        <button onClick={() => addToMyCart(data?.data.data.id)} className='bttn btn btn-success w-100 opacity-100'>+add to cart</button>

                    </div>
                </div>

            </div>
            <Helmet>
                <title>productDetails</title>
            </Helmet>
        </>
    )
}
