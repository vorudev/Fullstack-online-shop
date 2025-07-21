'use server';

import { db } from "@/db/drizzle";
import { reviews, products } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getReviewsByProductId(productId: string) {
  try {
    const productReviews = await db
      .select()
      .from(reviews)
      .where(eq(reviews.product_id, productId));
    return productReviews;
  } catch (error) {
    console.error("Error fetching reviews by product ID:", error);
    throw new Error("Failed to fetch reviews by product ID");
  }
}
export async function getLimitedReviewsByProductId(productId: string, limit: number) {
  try {
    const productReviews = await db
      .select()
      .from(reviews)
      .where(eq(reviews.product_id, productId))
      .limit(limit);

    return productReviews;
  } catch (error) {
    console.error("Error fetching limited reviews by product ID:", error);
    throw new Error("Failed to fetch limited reviews by product ID");
  }
}
export async function createReview(review: Omit<typeof reviews.$inferInsert, 'id' | 'createdAt' | 'updatedAt'>) {
  try {
    const newReview = await db.insert(reviews).values(review).returning();
    return newReview[0]; // Возвращаем созданный отзыв
  } catch (error) {
    console.error("Error creating review:", error);
    throw new Error("Failed to create review");
  }
}
export async function deleteReview(id: string) {
  try {
    await db.delete(reviews).where(eq(reviews.id, id));
  } catch (error) {
    console.error("Error deleting review:", error);
    throw new Error("Failed to delete review");
  }
}