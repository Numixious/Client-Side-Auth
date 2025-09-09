"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface User {
  name: string;
  email: string;
  picture: string;
}

const customLoader = ({ src }: { src: string }) => {
  return src;
};

const DashboardPage = () => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (!storedUser) {
        router.push("/login");
      } else {
        setUser(JSON.parse(storedUser));
      }
    }
  }, [router]);

  useEffect(() => {
    if (user) {
      console.log("User picture URL:", user.picture);
    }
  }, [user]);

  const handleLogout = () => {
    if (typeof window !== "undefined") {
      localStorage.removeItem("user");
      router.push("/login");
    }
  };

  if (!user) {
    return null; // Render nothing while waiting for user data
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md text-center">
        <Image
          loader={customLoader}
          src={user.picture || "/fallback-profile.png"}
          alt="User Profile"
          width={96}
          height={96}
          className="rounded-full mx-auto mb-4 border-4 border-blue-500"
          onError={(e) => {
            e.currentTarget.src = "/fallback-profile.png";
          }}
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
