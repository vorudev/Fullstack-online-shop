

import ProductsTable from "@/components/products-table";
import { ProductForm} from "@/components/forms/product-form";
import { Button } from "@/components/ui/button";
import { Logout } from "@/components/logout";
import { PlusIcon, UserPlusIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { redirect } from 'next/navigation';
import { auth } from '@/lib/auth';
import { db } from '@/db/drizzle';
import { user } from '@/db/schema';
import { eq } from 'drizzle-orm';
export default  function DashboardPage() {
  return (
    
    <div className="container mx-auto p-4">

      <h1 className="text-2xl font-bold mb-4">Products</h1> 
      <div className="flex justify-end">
      <Dialog>
  <DialogTrigger asChild><Button>Add Product<PlusIcon /></Button></DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Add Item</DialogTitle>
      <DialogDescription>
        Add a new item to the DataBase
      </DialogDescription>
      <ProductForm />
    </DialogHeader>
  </DialogContent>
</Dialog>
 
    </div>
      <ProductsTable />
    </div>
  );
}