import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"

function AdminRegister() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        storeName: "",
        descp: "",
        icon: "",
        banner: "",
        password: "",
    });

    const [phones, setPhones] = useState([]);
    const [phoneInput, setPhoneInput] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleAddPhone = () => {
        if (phoneInput.trim() === "") return;
        setPhones([...phones, phoneInput.trim()]);
        setPhoneInput("");
    };

    const handleRemovePhone = (index) => {
        setPhones(phones.filter((_, i) => i !== index));
    };

          const handleSubmit = async (e) => {
            e.preventDefault();
            if (formData.firstName == "" || formData.lastName == "" || formData.email == "" || phones.length === 0 || formData.storeName == "" || formData.phone == "") {
                alert("all fields required")
            } else {
                try {
                    const merchant_register = {
                        first_name: formData.firstName,
                        last_name: formData.lastName,
                        phone: formData.phone,
                        email: formData.email,
                        store_name: formData.storeName,
                        descp: formData.descp,
                        icon: formData.icon,
                        banner: formData.banner,
                        phones: phones,
                        password: formData.password
                    };
                    const resp = await axios.post("http://ecommerce.reworkstaging.name.ng/v2/merchants", merchant_register);
                    if (resp.data.id) {
                        alert("Admin/merchant created succesfully")
                        console.log(resp.data)
                        navigate("/admin/login")
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        };


    return (
        <div className="flex min-h-screen items-center justify-center bg-neutral-100 px-4 py-10">
            <div className="w-full max-w-2xl rounded-lg border border-neutral-200 bg-white p-8 shadow-sm">
                <div className="text-center">
                    <span className="text-2xl font-black tracking-tight">DP. Admin</span>
                    <p className="mt-1 text-sm text-neutral-500">Create Your Merchant Account</p>
                </div>

                <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-6">
                    {/* Personal details */}
                    <section>
                        <h2 className="mb-3 text-sm font-semibold text-neutral-500">Personal Details</h2>
                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            <div>
                                <label className="text-sm font-medium">First Name</label>
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Last Name</label>
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Phone Number</label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                                />
                            </div>
                        </div>
                    </section>

                    {/* Store details */}
                    <section>
                        <h2 className="mb-3 text-sm font-semibold text-neutral-500">Store Details</h2>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm font-medium">Store Name</label>
                                <input
                                    type="text"
                                    name="storeName"
                                    value={formData.storeName}
                                    onChange={handleChange}
                                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Store Description</label>
                                <textarea
                                    name="descp"
                                    value={formData.descp}
                                    onChange={handleChange}
                                    rows={3}
                                    className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                                />
                            </div>

                            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                <div>
                                    <label className="text-sm font-medium">Store Icon</label>
                                    <input
                                        type="url"
                                        name="icon"
                                        onChange={handleChange}
                                        className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                                    />
                                </div>

                                <div>
                                    <label className="text-sm font-medium">Store Banner</label>
                                    <input
                                        type="url"
                                        name="banner"
                                        onChange={handleChange}
                                        className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Additional phone numbers - array field */}
                    <section>
                        <h2 className="mb-3 text-sm font-semibold text-neutral-500">
                            Additional Contact Numbers
                        </h2>
                        <div className="flex gap-2">
                            <input
                                type="tel"
                                value={phoneInput}
                                onChange={(e) => setPhoneInput(e.target.value)}
                                placeholder="e.g. 0987654321"
                                className="w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                            />
                            <button
                                type="button"
                                onClick={handleAddPhone}
                                className="shrink-0 rounded-md border border-neutral-300 px-4 py-2.5 text-sm font-medium hover:bg-neutral-50"
                            >
                                Add
                            </button>
                        </div>

                        {phones.length > 0 && (
                            <div className="mt-3 flex flex-wrap gap-2">
                                {phones.map((num, index) => (
                                    <span
                                        key={index}
                                        className="flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1.5 text-sm"
                                    >
                                        {num}
                                        <button
                                            type="button"
                                            onClick={() => handleRemovePhone(index)}
                                            aria-label={`Remove ${num}`}
                                            className="text-neutral-500 hover:text-red-600"
                                        >
                                            ✕
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </section>

                    {/* Security */}
                    <section>
                        <h2 className="mb-3 text-sm font-semibold text-neutral-500">Security</h2>
                        <div>
                            <label className="text-sm font-medium">Password</label>
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                className="mt-1 w-full rounded-md border border-neutral-300 px-3 py-2.5 text-sm outline-none"
                            />
                        </div>
                    </section>

                    <button
                        type="submit"
                        className="mt-2 rounded-md bg-neutral-900 py-3 text-sm font-semibold text-white hover:bg-black"
                    >
                        Create Merchant Account
                    </button>

                    <p className="text-center text-sm text-neutral-600">
                        Already have an account?{" "}
                        <Link to="/admin/login" className="text-blue-700 underline hover:no-underline">
                            Login
                        </Link>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default AdminRegister;