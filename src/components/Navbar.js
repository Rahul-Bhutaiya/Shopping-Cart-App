import React from 'react'
import { NavLink } from 'react-router-dom';
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from 'react-redux';

const Navbar = () => {

    const cart = useSelector((store)=>store.cart)

  return (
    <nav className='flex justify-center items-center py-3  bg-slate-900'>

        <div className='w-11/12 flex justify-between'>
            <NavLink to='/'>
                <img src='../logo.png' alt='shoping cart app logo' className='h-14 object-contain'/>
            </NavLink>

            <div className='flex items-center space-x-6 text-slate-100 font-medium relative'>
                <NavLink to='/' className='hover:text-green-400 transition duration-300'>Home</NavLink>
                <NavLink to='/cart' className='flex items-center relative'>
                    <FaShoppingCart fontSize={'1.5rem'} className='hover:text-green-400 transition duration-300 relative'/>
                    {
                        cart.length?
                        (
                            <span 
                                className='flex justify-center items-center text-sm bg-green-600 
                                            h-[1.2rem] w-[1.2rem] rounded-full absolute -right-2 -top-1 animate-bounce'>
                                {cart.length}
                            </span>
                        ):
                        (null)
                    }
                    
                </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navbar