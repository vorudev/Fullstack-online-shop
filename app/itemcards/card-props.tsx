'use client';
import React from "react";
import { useCart } from "../context/cartcontext"; // Adjust the import path as necessary
import Image from "next/image";

import Link from "next/link";

interface CardProps { 
    card: { title: string;
    image: string;
    price: number;  
    bgImage: string;
    id: string;
slug: string; // Add slug to the card properties
     }

} 


export const Card: React.FC<CardProps> = ({ card }) => { 
        


    return (
    
        <Link className="flex flex-col lg:gap-[20px]  pt-[20px] cursor-pointer group relative overflow-hidden bg-[rgb(228,224,212)] lg:bg-transparent  h-full" 
      
       href={`/product/${card.slug}`} // Use the slug for the link
       >
    <img src={card.bgImage}  alt="" className=" z-2 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500 absolute">
    </img>
    <div className="absolute h-full flex items-end justify-center pb-[20px] w-full  z-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<div className="pt-[20px]  w-full bg-[rgba(255,255,255,0.2)] text-[rgb(228,224,212)]   opacity-0 group-hover:opacity-100 transition-opacity duration-300 pb-[20px]">
<div className="uppercase text-xs bdog flex-row flex items-center justify-center  gap-2 cursor-pointer ">
    view product <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full border-[rgb(228,224,212)] flex overflow-hidden cursor-pointer` }> 
<span>
    →
    </span></div> 
</div>
</div>
    </div>
     <div className="flex flex-col   h-full lg:gap-[20px]">
<h1 className="uppercase  md:text-xs text-[11px]  bdog text-center ">
    recommend
</h1>
<div className="relative aspect-square">
<img alt='' src={card.image}  className="z-1 aspect-square object-cover">
</img>
</div>
<div className="flex flex-col items-center h-full pb-[20px] lg:pb-0  lg:gap-[16px] gap-[8px] lg:px-[40px] px-[16px] ">
<h1 className="uppercase  text-center prata1-1 lg:text-[16px] md:text-[15px] text-[14px] ">{card.title}</h1>
<p className="md:text-xs text-[11px] bdog text-center ">
    {card.price} USD
</p>
</div>
<div className="pt-[12px] pb-[12px] lg:pt-[20px] lg:pb-[20px] lg:bg-transparent bg-[rgb(35,25,22)] text-[rgb(228,224,212)] lg:text-[rgb(35,25,22)]"
>
<div className="uppercase md:text-xs text-[11px] bdog2 flex-row flex items-center justify-center gap-2 cursor-pointer ">
    view product <div className={`w-[24px] h-[24px]  items-center  justify-center  border  rounded-full lg:border-[rgb(35,25,22)] flex overflow-hidden cursor-pointer` }> 
<span>
    →
    </span></div> 
</div>
</div>
</div>
        </Link>
    );
} 
