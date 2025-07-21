import UserProfile from "@/components/user-pofile";
import Image from "next/image";
import Link from "next/link";
import { ProfileUpdateForm } from "@/components/forms/update-user-form";
import { Header } from "../header-nos";
export default function ProfilePage() {
    return (
        <>
        <Header />
        <div className="bg-[rgb(251,251,239)] text-[rgb(35,25,22)]  w-full h-screen pt-[60px] lg:pt-[0px]">
            <div className="absolute w-full hidden lg:block z-4 px-6 pt-[90px] ">
<Link href="/" >
<svg xmlns="http://www.w3.org/2000/svg" height="25px" viewBox="0 -960 960 960" width="25px" fill="#ffffff"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/></svg>
</Link>
            </div>
            <div className="flex flex-col h-full lg:flex-row lg:h-screen">
<div className="flex flex-col gap-[24px] px-[40px] items-center lg:w-1/2 lg:h-full lg:justify-center  relative z-2">
<div className="">
 <Image fill src="/bg-menu.webp" alt="" className="z-0 object-cover " />
</div>
<div className="relative z-2">
    <h1 className="text-[28px] md:text-[32px] lg:text-[40px] uppercase prata3 text-center max-w-[400px] text-[rgb(251,251,239)] py-5 ">Your profile </h1>
</div>
<div className="flex flex-col gap-[16px] lg:gap-0 w-full items-center lg:flex-row lg:absolute lg:items-end lg:h-full lg:pb-[24px] lg:px-[24px]">


</div>

</div>
<div className="relative h-full w-full mt-[24px] lg:mt-0 lg:w-1/2 lg:aspect-auto ">

<ProfileUpdateForm />
</div>
</div>
        </div>
        </>
    )
}