"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const DashboardPage = () => {
  const router = useRouter();

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (!user) {
      router.push("/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const user = JSON.parse(localStorage.getItem("user") || "{}");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md text-center">
        <Image
          src={user.picture}
          alt="User Profile"
          width={96}
          height={96}
          className="rounded-full mx-auto mb-4 border-4 border-blue-500"
        />
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-800 mb-2">
          Welcome, {user.name}!
        </h1>
        <p className="text-sm sm:text-base text-gray-600 mb-6">
          We&apos;re glad to have you back.
        </p>
        <button
          onClick={handleLogout}
          className="mt-4 w-full px-4 sm:px-6 py-2 sm:py-3 text-white font-semibold bg-red-500 rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
