import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSignup } from "../redux/features/Auth/authSlice";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Get auth state from Redux
  const { isLoading } = useSelector((state) => state.auth);

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  // Input change handler
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password) {
      return setError("All fields are required");
    }

    setError("");

    try {
      // Dispatch signup action
      const result = await dispatch(getSignup(formData)).unwrap();

      // ✅ Redirect to home after successful signup
      navigate("/", { replace: true });
    } catch (err) {
      setError(err?.message || "Signup failed. Try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-600 to-indigo-700 px-4">
      <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl p-8">
        {/* Heading */}
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">
            Create Account
          </h2>
          <p className="text-gray-500 text-sm mt-2">
            Join JobReady and start your journey 🚀
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-100 text-red-600 text-sm p-3 rounded-md mb-4 text-center">
            {error}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name */}
          <div>
            <label className="text-sm text-gray-600">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-1 border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              type="email"
              name="email"
              placeholder="example@gmail.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-1 border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="text-sm text-gray-600">Password</label>
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              className="w-full mt-1 border p-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none transition"
            />
          </div>

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-md"
          >
            {isLoading ? "Creating Account..." : "Sign Up"}
          </button>
        </form>

        {/* Footer */}
        <p className="text-sm text-center mt-6 text-gray-600">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 font-medium cursor-pointer hover:underline"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
};

export default Signup;