import axios from 'axios'
import React from 'react'
import { useQuery } from 'react-query'
import { useParams } from 'react-router-dom'
import Spinner from '../Spinner/Spinner'

export default function SpecificCategory() {

    let { id } = useParams()

    function getSpecificCategory() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`)
    }
    let { data, isLoading, isError, isFetching } = useQuery("getSpecificCategory", getSpecificCategory)
    if (isLoading || isError || isFetching) {
        return <div className=' vh-100 d-flex justify-content-center align-items-center '><Spinner /></div>

    }
    return (
        <div className="container pt-4">
            <div className="row align-items-center pt-5 flex-column">
                <div className="col-md-6">
                    <img src={data.data.data.image} style={{ height: "400px" }} className='w-100' alt="" />
                </div>
                <div className="col-md-6">
                    <p className='text-center fw-bolder'>{data.data.data.name}</p>
                </div>
            </div>
        </div>
    )
}
