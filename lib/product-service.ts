'use server';
import { db } from "@/db/drizzle";
import { Product, products } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getProductsBySlug(slug: string):  Promise<Product | undefined>  {
try { 
    const product = await db.select().from(products).where(eq(products.slug, slug)).limit(1);
    return product[0]; // Return the first product found
  } catch (error) { 
    console.error("Error fetching product by ID:", error);
    throw new Error("Failed to fetch product by ID");
  }
}
 
