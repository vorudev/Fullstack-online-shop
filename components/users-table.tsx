'use server';
import { getUsers } from "@/server/admin";
import DeleteUserButton from "./delete-user-button";
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
export async function GetAllUsers() { 
    const users = await getUsers();
    return ( 
       <Table> 
        <TableCaption>A list of all registered users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead className="text-right">Controls</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell className="font-medium">{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.role}</TableCell>
              <TableCell className="text-right">
                <DeleteUserButton userId={user.id} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
       </Table>
    )
} 