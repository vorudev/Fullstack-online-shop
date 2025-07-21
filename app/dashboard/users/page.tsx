import { authClient } from "@/lib/auth-client";
import { GetAllUsers } from "@/components/users-table";
export default function UsersPage() {


  

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Users</h1>
           <GetAllUsers />
        </div>
    );
 } 