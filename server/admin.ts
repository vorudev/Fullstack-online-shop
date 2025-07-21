'use server';

import { db } from "@/db/drizzle";
import { user, User } from "@/db/schema";
import { eq } from "drizzle-orm";

export async function getUsers() {
  try {
    const allUsers = await db.select().from(user);
    return allUsers;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw new Error("Failed to fetch users");
  }
}

export async function deleteUser(id: string) {
  try {
    await db.delete(user).where(eq(user.id, id));
  } catch (error) {
    console.error("Error deleting user:", error);
    throw new Error("Failed to delete user");
  }
}