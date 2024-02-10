import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../Redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const Product = ({product}) => {

    const cart=useSelector((store)=>store.cart);
    const dispatch=useDispatch();

    function addToCartHandler(){
        dispatch(addToCart(product));
        toast.success('Item added to cart!');
    }

    function removeFromCartHandler(){
        dispatch(removeFromCart(product.id));
        toast.error('Item removed from cart!')
    }
    
    
  return (
    <div
        className='flex flex-col items-center justify-center gap-3 p-4
        rounded-xl transition duration-300 ease-in
        hover:scale-110 group
        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]'>

        <h2 className='truncate w-40 font-semibold text-lg text-gray-700'>{product.title}</h2>

        <p className='w-40 text-gray-400  text-[10px] '>{product.description.split(' ').slice(0,10).join(' ')}...</p>

        <img src={product.image} alt={product.title} className='h-[180px] object-contain'/>

        <div className='flex justify-between items-center mt-5 w-full'>
        
            <h3 className='text-green-600 font-semibold'>${product.price}</h3>
            {
                cart.length?
                (
                    cart.some(eachCartProduct=>eachCartProduct.id===product.id)?
                    (
                        <button 
                        className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in
                                    text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px] tracking-wide'
                        onClick={removeFromCartHandler}>
                            REMOVE ITEM
                        </button>
                    ):
                    (
                        <button 
                        className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in
                                    text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px]'
                        onClick={addToCartHandler}>
                            ADD TO CART
                        </button>
                    )
                ):
                (
                    (
                        <button 
                        className='group-hover:bg-gray-700 group-hover:text-white transition duration-300 ease-in
                                    text-gray-700 border-2 border-gray-700 rounded-full font-semibold p-1 px-3 text-[12px]'
                        onClick={addToCartHandler}>
                            ADD TO CART
                        </button>
                    )
                )
            }
        </div>
    </div>
  )
}

export default Product