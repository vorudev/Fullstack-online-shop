'use client';
import { deleteUser } from "@/server/admin";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2 } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";

interface DeleteUserButtonProps {
  userId: string;
}

export default function DeleteUserButton({ userId }: DeleteUserButtonProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
    const handleDelete = async () => {
        try {
        setIsLoading(true);
        await deleteUser(userId);
        setIsOpen(false);
        router.refresh();
        } catch (error) {
        console.error("Error deleting user:", error);
        } finally {
        setIsLoading(false);
        }
    };
    return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost">
          <Trash2 className="size-4" />
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete the user from the database.
          </DialogDescription>

          <Button
            disabled={isLoading}
            variant="destructive"
            onClick={handleDelete}
          >
            {isLoading ? <Loader2 className="size-4 animate-spin" /> : "Delete"}
          </Button>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}