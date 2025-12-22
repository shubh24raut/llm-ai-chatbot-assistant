"use client";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md  border rounded-xl shadow-sm p-8 space-y-6">
        {/* Header */}
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-semibold">Welcome back</h1>
          <p className="text-sm text-gray-500">
            Sign in to continue
          </p>
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-3 py-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-black"
          />
        </div>

        {/* Actions */}
        {/* <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="rounded border-gray-300" />
            Remember me
          </label>

          <button className="text-gray-600 hover:text-black">
            Forgot password?
          </button>
        </div> */}

        {/* Login Button */}
        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-900 transition">
          Sign in
        </button>

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
          <span className="text-black font-medium cursor-pointer text-white">
            Sign up
          </span>
        </p>
      </div>
    </div>
  );
}
