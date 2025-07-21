'use server';

import { db } from "@/db/drizzle";
import { Product, products } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getProducts() {
  try {
    const allProducts = await db.select().from(products);
    return allProducts;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw new Error("Failed to fetch products");
  }
    
}
export async function createProduct(product: Omit<Product, "id" | "createdAt" | "updatedAt">) {
  try {
   await db.insert(products).values(product).returning();
  } catch (error) {
    console.error("Error creating product:", error);
    throw new Error("Failed to create product");
  }
    
}
export async function updateProduct( product: Omit<Product, "createdAt" | "updatedAt">) {
 try { 
    await db.update(products).set(product).where(eq(products.id, product.id))
 }
    catch (error) {
        console.error("Error updating product:", error);
        throw new Error("Failed to update product");
    }

 }
export async function deleteProduct(id: string) {
  try {
    await db.delete(products).where(eq(products.id, id));
  } catch (error) {
    console.error("Error deleting product:", error);
    throw new Error("Failed to delete product");
  }
}