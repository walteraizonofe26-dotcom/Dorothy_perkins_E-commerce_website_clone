import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom"

function AdminLogin() {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();
        if (email == "" || password == "") {
            alert("all fields required")
        } else {
            try {
                const merchant_login = {
                    email: email,
                    password: password,
                };

                const resp = await axios.post("http://ecommerce.reworkstaging.name.ng/v2/merchants/login", merchant_login);
                console.log(resp.data)
                if (resp.data.id) {
                    alert("login successful")
                    navigate("/admin/dashboard")
                }
            } catch (error) {
                console.log(error)
            }
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-neutral-100 px-4">
            <div className="w-full max-w-md rounded-lg border border-neutral-200 bg-white p-8 shadow-sm">
                <div className="text-center">
                    <span className="text-2xl font-black tracking-tight">DP. Admin</span>
                    <p className="mt-1 text-sm text-neutral-500">Merchant Dashboard Login</p>
                </div>

                <form onSubmit={handleLogin} className="mt-6 flex flex-col gap-4">
                    <div>
                        <label htmlFor="email" className="text-sm font-medium">
                            Email address
                        </label>
                        <input
                            id="email"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="text-sm font-medium">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                        />
                    </div>

                    <a href="#" className="text-sm text-blue-700 underline hover:no-underline">
                        Forgot password?
                    </a>

                    <button
                        type="submit"
                        className="mt-2 rounded-md bg-neutral-900 py-3 text-sm font-semibold text-white hover:bg-black">
                        Login
                    </button>

                    <p className="text-center text-sm text-neutral-600">
                        Don't have an account?{" "}
                        <Link to="/admin/register" className="text-blue-700 underline hover:no-underline">
                            Create one
                        </Link>
                    </p>

                </form>
            </div>
        </div>
    );
}

export default AdminLogin;