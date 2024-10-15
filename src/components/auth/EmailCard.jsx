"use client"

import { CustomButton } from "@/components/common/CustomButtons"
import { Mail } from "lucide-react"
import { useRouter } from "next/navigation"

const EmailCard = () => {
    const router = useRouter()
    return (
        <div className="flex items-center justify-between p-3 px-5 rounded-xl bg-white opacity-50">
            <div className="flex items-center gap-3">
                <Mail className="text-lg" />
                <p>amithariyale125@gmail.com</p>
            </div>
            <CustomButton onClick={() => router.push('/forgot_password')} className="px-5 py-0 rounded-xl w-max bg-transparent hover:bg-[var(--main-gray)] duration-300 text-black !border-[light-gray] border-[2px]">
                Change
            </CustomButton>
        </div>
    )
}

export default EmailCard
