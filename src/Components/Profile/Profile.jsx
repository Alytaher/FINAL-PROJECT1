import React, { useContext, useEffect } from 'react'

import { jwtDecode } from 'jwt-decode'
import { Helmet } from 'react-helmet'

export default function Profile() {

    function getinfoUser() {

        let decodeToken = jwtDecode(`${localStorage.getItem('userToken')}`)



        return decodeToken

    }
    let x = getinfoUser()





    return (
        <>
            {localStorage.getItem("userToken") !== null ? <h1 className='m-auto text-center mt-5'>Hello, <span className='text-main'>{x.name}</span></h1> : null}
            <Helmet>
                <title>Profile</title>
            </Helmet>
        </>
    )
}
