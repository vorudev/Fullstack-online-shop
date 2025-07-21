
import { auth } from '@/lib/auth';
import  UsersPage from './user-dashboard';
import DashboardPage from "./dashboard";
import { getUsers } from '@/server/admin';
import { Logout } from '@/components/logout';
import { SectionCards } from '@/components/section-cards';

export default async function Page() {
const users = await getUsers();

    return ( 
<div className="flex flex-1 flex-col ">
 
          <div className="@container/main flex flex-1 flex-col gap-2">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <SectionCards />
         
            </div>
          </div>
        </div>
   )
 }
