'use server';

import React from "react";
import { Card } from "./card-props"; // Adjust the import path as necessary

import { useCart } from "../context/cartcontext"; // Adjust the import path as necessary
import { getProducts } from "@/server/products";



import Image from "next/image";








 export default async function Cards() {
    const products = await getProducts(); // Assuming this function fetches the products from your server or database


    return ( 
       
        <div className="w-full grid lg:grid-cols-4 grid-cols-2   bg-[rgb(251,251,239)] [grid-auto-rows:minmax(0,1fr)] text-[rgb(35,25,22)] ">

{products.map((product) => (
            <Card key={product.id} card={product}  />
))}

        </div>
       
    )
 }