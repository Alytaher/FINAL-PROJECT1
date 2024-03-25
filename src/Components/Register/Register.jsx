import React, { useState } from 'react'
import { useFormik, validateYupSchema } from 'formik'
import * as yup from 'yup';
import axios from 'axios';
import Spinner from '../Spinner/Spinner';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';


export default function Register() {

  let [errMessage, setErrMessage] = useState(null)
  let [isLoading, setIsLoading] = useState(false)

  let navigate = useNavigate()

  let validationSchema = yup.object({
    name: yup.string().min(3, "too short").max(10, "too long").required(),
    email: yup.string().email("email not valid").required(),
    password: yup.string().matches(/^[A-Z][a-z0-9]{3,8}$/, "password not vaild").required(),
    rePassword: yup.string().oneOf([yup.ref("password"), "not match password"]).required(),
    phone: yup.string().matches(/^01[1250][0-9]{8}$/, "invalid number").required(),
  })







  async function registerUser(req) {
    await axios.post("https://ecommerce.routemisr.com/api/v1/auth/signup", req).then((res) => {
     
      setErrMessage(null)
      setIsLoading(false)
      navigate("/Login")

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
    onSubmit: (data) => registerUser(data)

    ,
    validationSchema: validationSchema

  })




  return (
    <>

      <div className="container w-50  pt-5 m-auto">
        <h1>Register Now:</h1>

        <form onSubmit={formikRegister.handleSubmit} >
          <label htmlFor='name' className='mb-1'>Name:</label>
          <input type='text' className='form-control mb-3' onChange={formikRegister.handleChange} value={formikRegister.values.name} onBlur={formikRegister.handleBlur} id='name' />
          {formikRegister.errors.name && formikRegister.touched.name ? <div className='alert alert-danger'>{formikRegister.errors.name}</div> : null}

          <label htmlFor='email' className='mb-1'>Email:</label>
          <input type='emial' className='form-control mb-3' onChange={formikRegister.handleChange} value={formikRegister.values.email} onBlur={formikRegister.handleBlur} id='email' />
          {formikRegister.errors.email && formikRegister.touched.email ? <div className='alert alert-danger'>{formikRegister.errors.email}</div> : null}

          <label htmlFor='password' className='mb-1'>Password:</label>
          <input type='password' className='form-control mb-3' onChange={formikRegister.handleChange} value={formikRegister.values.password} onBlur={formikRegister.handleBlur} id='password' />
          {formikRegister.errors.password && formikRegister.touched.password ? <div className='alert alert-danger'>{formikRegister.errors.password}</div> : null}


          <label htmlFor='rePassword' className='mb-1'>Repassword:</label>
          <input type='password' className='form-control mb-3' onChange={formikRegister.handleChange} value={formikRegister.values.rePassword} onBlur={formikRegister.handleBlur} id='rePassword' />
          {formikRegister.errors.rePassword && formikRegister.touched.rePassword ? <div className='alert alert-danger'>{formikRegister.errors.rePassword}</div> : null}


          <label htmlFor='phone' className='mb-1'>Phone:</label>
          <input type='tel' className='form-control mb-3' onChange={formikRegister.handleChange} value={formikRegister.values.phone} onBlur={formikRegister.handleBlur} id='phone' />
          {formikRegister.errors.phone && formikRegister.touched.phone ? <div className='alert alert-danger'>{formikRegister.errors.phone}</div> : null}


          <button onClick={() => setIsLoading(true)} type='sumbit' disabled={!(formikRegister.dirty && formikRegister.isValid)} className='btn bg-main text-white d-block ms-auto'>{isLoading ? <i className='fa fa-spinner fa-spin'></i> : "Register"}</button>

          {errMessage ? <div className='alert alert-danger'>{errMessage}</div> : null}
        </form>


      </div>
      <Helmet>
        <title>Register</title>
      </Helmet>
    </>
  )
}
