'use client';
import { z } from "zod";
import { Loader2 } from "lucide-react";
import { Product } from "@/db/schema";
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { updateProduct, createProduct } from "@/server/products";
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


interface ProductFormProps {
    product?: Product;
}
const formSchema = z.object({
 price: z.number().min(1, "Price is required"), 
 title: z.string().min(1, "Title is required"),
    image: z.string().min(1, "Image URL is required"),
    bgImage: z.string().min(1, "Background Image URL is required"),
    slug: z.string().min(1, "Slug is required").max(255, "Slug must be less than 255 characters"), 
    description: z.string().min(1, "Description is required"),

})

export function ProductForm({product}: ProductFormProps) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
     price: product?.price ? Number(product.price) : 0, // ИСПРАВЛЕНО: преобразуем в число
        title: product?.title || "",
        image: product?.image || "",
        bgImage: product?.bgImage || "",
        slug: product?.slug || "", // ИСПРАВЛЕНО: добавлено поле slug
        description: product?.description || "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true)
try {
    const productData = { 
        ...values,
    } 
    if (product) {
        await updateProduct({ ...productData, id: product.id });
     } else {
        await createProduct(productData);
     }

    form.reset();
    setIsLoading(false);
    router.refresh();
   
 }  catch (error) {
    console.error("Error submitting form:", error);
    throw new Error("Failed to submit form");
 }


  }
  return ( 
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-8">
        <FormField
          control={form.control}
            name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Products title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
            name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input placeholder="Products price"  type="number" {...field} 
                  step="0.01"
                 onChange={(e) => {
                    const value = e.target.value;
                    field.onChange(value === '' ? 0 : Number(value));
                  }} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
            name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Input placeholder="Products description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
            name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Image URL</FormLabel>
              <FormControl>
                <Input placeholder="Product ImageURL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
            name="bgImage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Background Image URL</FormLabel>
              <FormControl>
                <Input placeholder="Product ImageURL" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
            name="slug"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Slug</FormLabel>
              <FormControl>
                <Input placeholder="Product Slug" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       <Button type="submit" disabled={isLoading}>{isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 
        (
            product ? "Update Item" : "Create Item")
        }</Button>
      </form>
    </Form>
  )
}