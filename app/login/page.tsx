"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const validateMobile = (number: string) => {
    const iranianMobileRegex = /^(09|\+989|00989)\d{9}$/;
    return iranianMobileRegex.test(number);
  };

  const handleLogin = async () => {
    if (!validateMobile(mobile)) {
      setError("Invalid mobile number format.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const response = await fetch("https://randomuser.me/api/?results=1&nat=us");
      const data = await response.json();
      const user = data.results[0];

      localStorage.setItem(
        "user",
        JSON.stringify({
          name: `${user.name.first} ${user.name.last}`,
          email: user.email,
          picture: user.picture.large,
        })
      );

      router.push("/dashboard");
    } catch {
      setError("Failed to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div className="bg-white p-6 sm:p-8 rounded shadow-md w-full max-w-sm sm:max-w-md">
        <h1 className="text-2xl font-bold mb-4">Login</h1>
        <label htmlFor="mobile" className="block text-sm font-medium text-gray-700">
          Mobile Number
        </label>
        <input
          id="mobile"
          type="text"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className={`mt-1 block w-full px-3 py-2 border ${
            error ? "border-red-500" : "border-gray-300"
          } rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 sm:text-sm`}
        />
        {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
        <button
          onClick={handleLogin}
          disabled={loading}
          className={`mt-4 w-full px-4 py-2 text-white font-medium rounded-md shadow-sm ${
            loading ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          } focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        >
          {loading ? "Loading..." : "Login"}
        </button>
      </div>
    </div>
  );
};

export default LoginPage;
