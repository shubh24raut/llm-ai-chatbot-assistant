"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export default function LoginPage() {

  const route = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm();

  const onSubmit = async (data) => {
    const { email, password } = data;
    try {
      const res = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email,
          password
        })
      })
      if (res) {
        route.push('/chat')
      }
    } catch (error) {
      alert(error?.message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md  border rounded-xl shadow-sm p-8 space-y-6">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-gray-500">Sign in to continue</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              {...register("email", { required: true })}
              className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />
            {errors.email && (
              <p className="text-xs text-red-500">Email is required</p>
            )}
          </div>

          {/* Password */}
          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              {...register("password", { required: true })}
              className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
            />

            {errors.password && (
              <p className="text-xs text-red-500">Password is required</p>
            )}
          </div>

          {/* Actions */}
          {/* <div className="flex items-center justify-between text-sm">
          <button className="text-gray-600 hover:text-black">
            Forgot password?
          </button>
        </div> */}

          {/* Login Button */}
          <button className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-900 transition">
            {isSubmitting ? "Logging in..." : "Log in"}
          </button>
        </form>

        {/* Divider */}
        {/* <div className="flex items-center gap-4">
          <div className="flex-1 h-px bg-gray-200" />
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200" />
        </div> */}

        {/* OAuth Placeholder */}
        {/* <button className="w-full border py-2 rounded-lg text-sm hover:bg-gray-50 transition">
          Continue with Google
        </button> */}

        {/* Footer */}
        <p className="text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <span className=" font-medium cursor-pointer text-white">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
