import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const resp = await axios.post(
        "http://ecommerce.reworkstaging.name.ng/v2/users/login",
        { email, password }
      );

      // Save whatever the API returns (user/token) for later use across the app
      localStorage.setItem("user", JSON.stringify(resp.data.data));

      navigate("/");
    } catch (err) {
      console.log(err);
      setError(
        err.response?.data?.message || "Invalid email or password. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 bg-neutral-100 px-6 py-10 md:flex-row md:justify-center">
      {/* Sign In box */}
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-sm">
        <h1 className="text-xl font-bold">Sign In</h1>

        {error && (
          <p className="mt-3 rounded-md bg-red-50 px-3 py-2 text-sm text-red-600">
            {error}
          </p>
        )}

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
              required
              className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none focus:border-black"
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
                required
                className="w-full rounded-md border border-neutral-300 px-3 py-2.5 pr-10 text-sm outline-none focus:border-black"
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
            disabled={isSubmitting}
            className="rounded-md bg-black py-3 text-sm font-semibold text-white transition-colors hover:bg-neutral-800 disabled:opacity-50"
          >
            {isSubmitting ? "Signing in..." : "SIGN IN"}
          </button>

          <div className="flex items-center gap-3 text-xs text-neutral-500">
            <span className="h-px flex-1 bg-neutral-300" />
            OR
            <span className="h-px flex-1 bg-neutral-300" />
          </div>

          <button
            type="button"
            className="flex items-center justify-center gap-2 rounded-md border border-neutral-300 py-3 text-sm font-medium hover:bg-neutral-50"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded bg-pink-200 text-xs font-bold text-pink-700">
              K
            </span>
            Continue with Klarna
          </button>
        </form>
      </div>

      {/* New to Dorothy Perkins box */}
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-sm">
        <h2 className="text-xl font-bold">New to Dorothy Perkins?</h2>
        <p className="mt-2 text-sm text-neutral-600">
          Create an account to check out faster in the future and receive emails about your
          orders, new products, events and special offers!
        </p>
        <Link
          to="/register"
          className="mt-4 block w-full rounded-md bg-black py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-neutral-800"
        >
          CREATE AN ACCOUNT
        </Link>
      </div>
    </div>
  );
}

export default Login;