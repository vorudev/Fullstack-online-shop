import { GalleryVerticalEnd } from "lucide-react"
import Link from "next/link"
import { LoginForm } from "@/components/forms/login-form"

export default function LoginPage() {
  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6 items-center">
     <Link href="/">
          <img
            src='/brown.svg'
            alt="Логотип"
            className="h-6 w-auto"
          />
          </Link>
        <LoginForm />
      </div>
    </div>
  )
}
