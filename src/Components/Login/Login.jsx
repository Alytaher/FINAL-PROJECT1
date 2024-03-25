import React, { useEffect, useState } from 'react'
import { useFormik, validateYupSchema } from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default function Login() {

  let [errMessage, setErrMessage] = useState(null)
  let [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate()

  let validationSchema = yup.object({
    email: yup.string().email("email not valid").required(),
    password: yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "password not vaild").required(),
  })








  async function loginUser(req) {
    await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signin", req).then((res) => {
     
      setErrMessage(null)
      setIsLoading(false)
      localStorage.setItem("userToken", res.data.token)
      navigate("/home")
    }).catch((err) => {
      setErrMessage(err.response.data.message)
      
      setIsLoading(false)

    })


  }



  let formikRegister = useFormik({

    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    onSubmit: (data) => loginUser(data)

    ,
    validationSchema: validationSchema

  })




  return (
    <>

      <div className="container w-50  pt-5 m-auto">
        <h1>Login Now:</h1>

        <form onSubmit={formikRegister.handleSubmit} >

          <label htmlFor='email' className='mb-1'>Email:</label>
          <input type='emial' className='form-control mb-3' onChange={formikRegister.handleChange} value={formikRegister.values.email} onBlur={formikRegister.handleBlur} id='email' />
          {formikRegister.errors.email && formikRegister.touched.email ? <div className='alert alert-danger'>{formikRegister.errors.email}</div> : null}

          <label htmlFor='password' className='mb-1'>Password:</label>
          <input type='password' className='form-control mb-3' onChange={formikRegister.handleChange} value={formikRegister.values.password} onBlur={formikRegister.handleBlur} id='password' />
          {formikRegister.errors.password && formikRegister.touched.password ? <div className='alert alert-danger'>{formikRegister.errors.password}</div> : null}



          <button onClick={() => setIsLoading(true)} type='sumbit' disabled={!(formikRegister.dirty && formikRegister.isValid)} className='btn bg-main text-white d-block ms-auto'>{isLoading ? <i className='fa fa-spinner fa-spin'></i> : "Login"}</button>

          {errMessage ? <div className='alert alert-danger'>{errMessage}</div> : null}
        </form>


      </div>
      <Helmet>
        <title>Login</title>
      </Helmet>
    </>
  )
}
