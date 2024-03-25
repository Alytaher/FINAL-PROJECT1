import React from 'react'
import { Circles } from 'react-loader-spinner'

export default function Spinner() {
    return <>
        <Circles
            height="50"
            width="50"
            color="#0aad0a"
            ariaLabel="circles-loading"
            wrapperStyle={{}}
            wrapperClass=""
            visible={true}
        />
    </>
}
