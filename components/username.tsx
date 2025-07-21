'use client';
import { useSession } from "@/lib/auth-client";
import Link from "next/link";

export default function Username() {
    const { data: session } = useSession();
    if (!session?.user?.name) {
        return <><Link href={"/login"} className="cursor-pointer md:text-xs text-[11px] bdog uppercase">

            login
          </Link></>;
    } else if (session?.user?.name) {
        return <><Link href={"/profile"} className="cursor-pointer md:text-xs text-[11px] bdog uppercase">

            {session.user.name}
          </Link></>;
    }
   
}