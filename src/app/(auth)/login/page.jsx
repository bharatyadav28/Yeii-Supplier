import Image from "next/image";
import Link from "next/link";
import LoginForm from "@/components/auth/LoginForm";
import { useTranslations } from "next-intl";

const LoginPage = () => {
  const t = useTranslations("loginPage");

  return (
    <div className="relative bg-[url('/login.jpg')]  bg-cover bg-center  h-screen w-full ">
      <div className="absolute bg-black/60   h-screen w-full flex justify-center items-center">
        <div className="flex flex-col justify-center gap-10 items-center w-[500px] ">
          <Image src="/logo.png" alt="logo" width={100} height={100} />
          <div className="w-full bg-white  p-[1px] rounded-xl bg-gradient-to-br from-gray-700 to-gray-300">
            <div className="relative p-8 h-full bg-gradient-to-b from-[#251917] to-[#4D2237] rounded-xl ">
              {/* Header */}
              <h2 className="text-3xl font-bold text-center text-[var(--main-pink)] mb-2">
                {t("heading")}
              </h2>
              <p className="text-center text-gray-300 mb-8 text-xs">
                {t("subHeading")}
              </p>

              {/* Form */}
              <LoginForm />
              {/* Footer */}
              <p className="text-center text-gray-400 mt-4 text-xs">
                {t("dontHaveAccount")}{" "}
                <Link
                  href="/signup"
                  className="text-yellow-400 hover:underline"
                >
                  {t("createAccount")}
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
