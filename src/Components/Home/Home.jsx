import React from 'react'
import MainSlider from '../MianSlider/MainSlider'
import SliderCategoru from '../SliderCategory/SliderCategoru'
import Product from '../Product/Product'
import { Helmet } from 'react-helmet'


export default function Home() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <MainSlider />
      <SliderCategoru />
      <Product />
    </>
  )
}
