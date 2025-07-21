'use server';
import { Button } from "@/components/ui/button";
import DeleteUserButton from "@/components/delete-product-button";
import { Pencil } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { ProductForm } from "./forms/product-form";
import { getProducts } from "@/server/products";

export default async function ProductsTable() { 
    const products = await getProducts();
    return ( 
        <Table>
  <TableCaption>A list of your products</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[100px]">Title</TableHead>
      <TableHead>Price</TableHead>
      <TableHead>Date</TableHead>
      <TableHead className="">Image</TableHead>
        <TableHead className=""> BG Image</TableHead>
        <TableHead className="text-right">Slug</TableHead>
      <TableHead className="text-right">Controls</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    {products.map((product) => (
      <TableRow key={product.id}>
        <TableCell className="font-medium">{product.title}</TableCell>
        <TableCell>{product.price}</TableCell>
        
        <TableCell>{product.createdAt?.toLocaleDateString()}</TableCell>
        
        <TableCell className="">
          <img src={product.image} alt={product.title} className="w-16 h-16 object-cover" />
        </TableCell>
        <TableCell className="">
          <img src={product.bgImage} alt={product.title} className="w-16 h-16 object-cover" />
        </TableCell>
        <TableCell className="text-right">{product.slug}</TableCell>
            <TableCell className="text-right">
        <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Pencil className="size-4" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Update Product</DialogTitle>
    

          <ProductForm product={product}/>
        </DialogHeader>
      </DialogContent>
    </Dialog>

 
           <DeleteUserButton productId={product.id}/>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
    )
}