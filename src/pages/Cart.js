import React from 'react'
import {useState,useEffect} from 'react';
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import { NavLink } from 'react-router-dom';

const Cart = () => {

    const cart=useSelector(store=>store.cart);
    const [totalAmount,setTotalAmount]=useState(0);

    function calculateTotalAmount(){
        if(cart.length){
            setTotalAmount(cart.reduce((accum,curr)=>accum+curr.price,0));
        }else{
            setTotalAmount(0);
        }
    }

    useEffect(()=>{
        calculateTotalAmount();
    },[cart]);

  return (
    <main className='w-11/12 mx-auto'>

        {
            cart.length?
            (
                <div className='flex flex-col md:flex-row justify-center'>
                    <section className='w-[100%] md:w-[60%] flex flex-col '>

                        {   
                            cart.map((eachCartItem,index)=>(<CartItem key={eachCartItem.id} cartItem={eachCartItem} cartIndex={index}/>))
                        }

                    </section>

                        
                    <section className='flex flex-col justify-between w-[100%] md:w-[40%] mt-[5rem] p-5 mb-14'>

                        <div className='flex flex-col gap-y-5'>
                            <h2 className='font-semibold text-green-800 '>YOUR CART 
                                <span className='text-green-700 text-5xl block'>SUMMARY</span>
                            </h2>
                            <p className='text-xl font-semibold text-gray-700'>Total Items: {cart.length}</p>
                        </div>

                        <div className='flex flex-col'>
                            <p className='flex flex-wrap text-gray-700 font-semibold text-xl'>Total Amount :   
                                <span className='text-black block font-bold ml-1'>
                                    ${totalAmount.toFixed(2)}
                                </span>
                            </p>
                            <button
                            className='max-w-[400px] mt-5 bg-green-700 border-2 border-green-600 rounded-lg text-white font-bold text-xl p-3
                                        hover:bg-purple-50 transition duration-300 ease-linear hover:text-green-700 '       
                            >Checkout Now</button>
                        </div>

                    </section>
                </div>
            ):
            (
                <div className='h-64 flex flex-col items-center justify-end gap-7 text-center'>
                    <h2 className='font-semibold text-xl text-gray-700'>Your cart is empty!</h2>
                    <NavLink to='/'
                            className='bg-green-600 border-2 border-green-600 text-white rounded-lg 
                                        p-3 px-10 tracking-wider font-semibold
                                    hover:bg-purple-50 hover:text-green-700 transition duration-300 ease-linear'
                    >SHOP NOW</NavLink>
                </div>
            )
        }

    </main>
  )
}

export default Cart