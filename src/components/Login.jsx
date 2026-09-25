import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignIn = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col gap-6 bg-neutral-100 px-6 py-10 md:flex-row md:justify-center">
      {/* Sign In box */}
      <div className="w-full max-w-md bg-white p-6">
        <h1 className="text-xl font-bold">Sign In</h1>

        <form onSubmit={handleSignIn} className="mt-4 flex flex-col gap-4">
          <div>
            <label htmlFor="email" className="text-sm font-medium">
              Email address
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full border border-neutral-300 px-3 py-2.5 text-sm outline-none"
            />
          </div>

          <div>
            <label htmlFor="password" className="text-sm font-medium">
              Password
            </label>
            <div className="relative mt-1">
              <input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-neutral-300 px-3 py-2.5 pr-10 text-sm outline-none"
              />
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500"
              >
                {showPassword ? "🙈" : "👁"}
              </button>
            </div>
          </div>

          <div className="flex flex-col gap-1">
            <a href="#" className="text-sm text-blue-700 underline hover:no-underline">
              Forgot password?
            </a>
            <a href="#" className="text-sm text-blue-700 underline hover:no-underline">
              Email me a sign in link
            </a>
          </div>

          <button
            type="submit"
            className="bg-black py-3 text-sm font-semibold text-white hover:bg-neutral-800"
          >
            SIGN IN
          </button>

          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span className="h-px flex-1 bg-neutral-300" />
            OR
            <span className="h-px flex-1 bg-neutral-300" />
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-neutral-300 py-3 text-sm font-medium hover:bg-neutral-50"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded bg-pink-200 text-xs font-bold text-pink-700">
              K
            </span>
            Continue with Klarna
          </button>
        </form>
      </div>

      {/* New to Dorothy Perkins box */}
      <div className="w-full max-w-md bg-white p-6">
        <h2 className="text-xl font-bold">New to Dorothy Perkins?</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Create an account to check out faster in the future and receive emails about your
          orders, new products, events and special offers!
        </p>
        <button className="mt-4 w-full bg-black py-3 text-sm font-semibold text-white hover:bg-neutral-800">
          CREATE AN ACCOUNT
        </button>
      </div>
    </div>
  );
}

export default Login;