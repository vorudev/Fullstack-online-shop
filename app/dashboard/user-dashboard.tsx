import { authClient } from "@/lib/auth-client";
import { GetAllUsers } from "@/components/users-table";
export default function UsersPage() {


  

    return (
        <div className="container mx-auto p-4 ">
           <GetAllUsers />
        </div>
    );
 } 