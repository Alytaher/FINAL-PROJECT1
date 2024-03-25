import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-query'
import Spinner from '../Spinner/Spinner'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'



export default function Category() {



  function getCategory() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)

  }
  let { data, isLoading, isError } = useQuery("getCategory", getCategory)


  if (isLoading || isError) {

    return <div className=' vh-100 d-flex justify-content-center align-items-center '><Spinner /></div>
  }

  return (
    <div className="container pt-5">
      <h2 className=' fw-bold mb-4 '>All Category:</h2>
      <div className="row gy-5">



        {data?.data.data.map((ele, indx) =>
          <div key={indx} className="col-md-3">
            <Link to={`/specificCAtegory/${ele._id}`} className="box">
              <img className='w-100 img-fluid' style={{ height: "200px" }} src={ele.image} alt="" />

              <p className='mt-3 text-center fw-bold'>{ele.name}</p>

            </Link>
          </div>

        )}
      </div>
      <Helmet>
        <title>Category</title>
      </Helmet>
    </div>

  )
}
