'use client';
import { useCart } from "../../context/cartcontext"; 


interface AddToCartProps {
id: string;
price: number;
title: string;
image: string;
 } 
export const AddToCart: React.FC<AddToCartProps> = ({ id, price, title, image }) => {
    const { addToCart, cart } = useCart();
    const product = {
        id,
        name: title,
        price,
        image,
    };
    
    const isInCart = cart.some((item) => item.id === product.id);
    
    return (
        <button
        className={`bg-[rgb(35,25,22)] text-[rgb(228,224,212)] w-full h-[48px] bdog text-[12px] uppercase  ${isInCart ? "" : "cursor-pointer"}`}
        onClick={() => addToCart(product)}
        disabled={isInCart}
        >
        {isInCart ? "In Cart" : "Add to Cart"}
        </button>
    );
 } 