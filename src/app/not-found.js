import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default async function NotFound() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-2xl px-4 text-center">
        {/* 404 Text */}
        <h1 className="text-9xl font-bold tracking-wider text-[#f63093]">
          404
        </h1>

        {/* Error Message */}
        <div className="mt-8 space-y-6">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Page not found
          </h2>
          <p className="text-lg text-gray-600">
            Sorry, we couldn&apos;t find the page you&apos;re looking for.
            Please check the URL or return to the homepage.
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="relative mt-10 mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-200" />
          </div>
          <div className="relative flex justify-center">
            <span className="px-4 bg-white text-sm text-gray-500">
              Navigate back
            </span>
          </div>
        </div>

        {/* Home Button */}
        <Link href="/">
          <Button className="bg-[#f63093] hover:bg-[#d62a7d] text-white transition-all">
            <Home className="mr-2 h-4 w-4" />
            Back to Home
          </Button>
        </Link>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white">
        <div className="absolute h-full w-full bg-[radial-gradient(#f6309315_1px,transparent_1px)] [background-size:16px_16px]" />
      </div>
    </div>
  );
}
