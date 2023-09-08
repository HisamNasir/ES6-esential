'use client'
import { useState } from 'react';

const products = [
    { id: 1, name: 'Product 1', price: 10 },
    { id: 2, name: 'Product 2', price: 20 },
    { id: 3, name: 'Product 3', price: 30 },
];
export default function Home() {
    const [cartItems, setCartItems] = useState([]);
    const [balance, setBalance] = useState(400);

    const addToCart = (product) => {
        if (balance >= product.price) {
            setCartItems([...cartItems, product]);
            setBalance(balance - product.price);
        } else {
            alert('Insufficient balance');
        }
    };
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    const buy = () => {
        alert(`Thank you for your purchase! Total: $${total}`);
        setCartItems([]);
    };
    return (
        <div className='h-screen grid grid-rows-8'>
            {/* Just because this is not main page and main page has it's own dimention thats why im not mentioning header cody and footer becaus it will not display properly */}
            <div className=' flex items-start'>
                <div className=" body-font bg-slate-900 w-full text-white ">
                    <div className="container mx-auto flex p-5  items-center">
                        <h1 className='flex w-full text-xl items-center'>ABC Markeet</h1>
                        <a className="flex title-font font-medium items-center justify-end w-full text-gray-900 mb-4 md:mb-0">

                            <span className="mr-3 text-white text-xl"><h1 className=''>Balance: $.{balance}</h1></span>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-slate-900 p-2 bg-amber-500 rounded-full">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center row-span-6 h-auto items-center'>
                <div>
                    <div className=' bg-slate-700 text-white items-center justify-center'>
                        <div className='p-10 bg-gray-900 rounded-xl'>
                            <h2>Product List</h2>
                            <ul className='flex m-8'>
                                {products.map((product) => (
                                    <li className='flex text-center m-4 justify-center flex-col ' key={product.id}>
                                        <img alt="team" className="flex-shrink-0 rounded-lg  flex justify-center h-40 w-40 object-cover object-center mb-4" src={`https://picsum.photos/600/900?`} />
                                        {product.name} - ${product.price}
                                        <button className='text-slate-900 p-2 bg-amber-500 rounded-xl text-md font-semibold m-2' onClick={() => addToCart(product)}>Add to Cart</button>
                                    </li>
                                ))}
                            </ul>

                        </div>
                    </div>
                    <div>
                        <h2 className='mt-4 mb-2 text-xl text-amber-500'>Shopping Cart</h2>
                        <div className=' overflow-scroll overflow-y-auto text-white'>
                            <div className='w-40'>
                                <ul className='flex space-x-8 my-4'>
                                    {cartItems.map((item) => (
                                        <li key={item.id}>
                                            {item.name} - ${item.price}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' flex items-end'>
                <div className="text-white bg-slate-900 body-font flex bottom-0 items-end w-full ">
                    <div className="container px-5 py-8 mx-auto h-full flex items-end sm:flex-row flex-col">
                        <p className=' py-2 text-amber-500 rounded-xl text-xl font-semibold px-6' >Total: <a className='text-white '>$.{total}</a></p>
                        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                            <button className='text-slate-900 py-2 bg-amber-500 rounded-xl text-xl font-semibold px-6' onClick={buy}>Buy</button>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}
