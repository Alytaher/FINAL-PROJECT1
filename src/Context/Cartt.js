import axios from "axios";
import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import Product from '../Components/Product/Product';
import { useNavigate } from "react-router-dom";



export let CarttContext = createContext();






export default function CarttContextprovider(props) {

    let [allCartProduct, setAllCartProduct] = useState(null)
    let [numOfCartItems, setNumOfCartItems] = useState(null)
    let [totalCartPrice, setTotalCartPrice] = useState(null)
    let [cartId, setCartID] = useState(null)
    // let Navigate = useNavigate()


    async function addToCart(id) {
        let data = await axios.post(`https://ecommerce.routemisr.com/api/v1/cart`, {
            "productId": id
        }, {
            headers: { token: localStorage.getItem("userToken") }
        }

        ).then((res) => {
         
            getDataFromCart()

            toast.success("add succcessfully")
        }).catch((err) => {
           
            toast.error("add not accure")

        })

        return data
    }

    async function getDataFromCart() {
        await axios.get(`https://ecommerce.routemisr.com/api/v1/cart`, {
            headers: { token: localStorage.getItem("userToken") }
        }).then((res) => {

           
            setAllCartProduct(res.data.data.products)
            setNumOfCartItems(res.data.numOfCartItems)
            setTotalCartPrice(res.data.data.totalCartPrice)
            setCartID(res.data.data._id)

        }).catch((err) => {
            
            setNumOfCartItems(null)

        })


       
    }

    async function deleteSpecificProduct(id) {
        let data = await axios.delete(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
            headers: { token: localStorage.getItem("userToken") }
        }).then((res) => {
            toast.success("item deleted successfully")
            getDataFromCart()
        }).catch((err) => {
            toast.error(" deleted not accure")

        })
       
    }

    async function clearCart() {
        await axios.delete("https://ecommerce.routemisr.com/api/v1/cart", {
            headers: { token: localStorage.getItem("userToken") }
        }).then((res) => {
            toast.success("Cart Cleared Successfully")
            setAllCartProduct(null)
            setNumOfCartItems(null)
            getDataFromCart()


        }).catch((err) => {
            toast.error("Cart Cleared not accure")

        })
    }

    async function updateCountitems(id, newCount) {
        await axios.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`, {
            "count": newCount
        }, {
            headers: { token: localStorage.getItem("userToken") }
        }).then((res) => {
            getDataFromCart()
        }).catch((err) => {
           
        })
    }




    useEffect(() => {
        getDataFromCart()

    }, [localStorage.getItem("userToken")])

    return <CarttContext.Provider value={{ addToCart, getDataFromCart, totalCartPrice, allCartProduct, deleteSpecificProduct, numOfCartItems, clearCart, updateCountitems ,cartId}}>{props.children}</CarttContext.Provider>
}