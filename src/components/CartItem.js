import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../Redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({cartItem,cartIndex}) => {

    const cart=useSelector(store=>store.cart);
    const dispatch=useDispatch();

    function removeFromCartHandler(){
        dispatch(removeFromCart(cartItem.id));
        toast.error('Item removed from cart!');
    }

    let borderStyling='border-b-2 border-slate-500';
    if(cartIndex===cart.length-1){
        borderStyling='';
    }

  return (
    <div className={`flex flex-col md:flex-row items-center gap-5 p-2 
            md:p-5 justify-between mt-2 mb-2 md:mx-5 ${borderStyling}`}>

        <div className='w-[30%] max-w-[215px]'>
            <img src={cartItem.image} alt={cartItem.category} className='object-cover'/>
        </div>

        <div className='md:ml-10 w-[100%] md:w-[70%] space-y-5'>
            <h2 className='text-xl font-semibold text-slate-700'>{cartItem.title}</h2>
            <p className='text-base text-slate-700 font-medium'>{cartItem.description.split(' ').slice(0,15).join(' ')}...</p>

            <div className='flex justify-between items-center'>
                <p className='font-bold text-lg text-green-600'>${cartItem.price}</p>
                <button onClick={removeFromCartHandler} 
                        className='group bg-red-200 rounded-full hover:bg-red-400 transition-transform p-3 mr-3'>
                    <MdDelete className='text-red-800 group-hover:text-white'/>
                </button>
            </div>

        </div>

    </div>
  )
}

export default CartItem