import { auth } from "@/lib/auth"
import { headers } from "next/headers"
import { ProfileUpdateForm } from "./forms/update-user-form"
import { Pencil } from "lucide-react"
import { Button } from "./ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "./ui/dialog"

export default async function UserProfile() {
  try {
    const session = await auth.api.getSession({
      headers: await headers()
    })

    const user = session?.user

    if (!user) {
      return (
        <div className="w-full ">
          <h1 className="text-red-200">Пользователь не найден</h1>
        </div>
      )
    }

    return (
      <div className="w-full flex flex-col lg:justify-center h-screen">
        <h1 className="px-5 py-2">User name</h1>
        
    
<ProfileUpdateForm />
        
     
      </div>
    )
  } catch (error) {
    return (
      <div className="w-full ">
        <h1 className="text-red-200">Error fetching user</h1>
      </div>
    )
  }
}
