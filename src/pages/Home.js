import React from 'react';
import {useState,useEffect} from 'react';
import Loader from '../components/Loader';
import Product from '../components/Product';

const Home = () => {

    const url='https://fakestoreapi.com/products';
    const [loadingState,setLoadingState]=useState(true);
    const [productData,setProductData]=useState([]);


    async function fetchProductData(){
        setLoadingState(true);        
        try{
            const responce=await fetch(url);
            const data=await responce.json();
            setProductData(data);
        }
        catch(error){
            console.log(error);
        }
        setLoadingState(false);
    }

    useEffect(()=>{
        fetchProductData();
    },[]);

  return (
    <div className='flex justify-center'>
    {
        loadingState?
        (<Loader/>):
        (
            <main className='w-11/12 mx-auto p-2 gap-x-5 gap-y-10 pt-14
                            grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 relative'>            

                {
                    
                    productData.length?
                    (
                        productData.map(eachProductData=><Product key={eachProductData.id} product={eachProductData}/>)
                    ):
                    (
                        <div className='sm:col-span-3 lg:col-span-4'>
                            <h2 className='font-semibold text-2xl mt-14 text-center'>
                                No Product Found!
                            </h2>
                        </div>
                    )
                    
                }

            </main>
        )
    }
    </div>
  )
}

export default Home