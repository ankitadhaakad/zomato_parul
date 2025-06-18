function Signup() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-cyan-400 to-indigo-600">
      <form className="bg-white rounded-2xl shadow-2xl px-8 py-10 w-full max-w-sm space-y-6 border border-blue-200">
        <h2 className="text-2xl font-extrabold text-center text-blue-700">🔐 Sign Up / Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <input
          type="password"
          placeholder="Enter Password"
          className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-blue-800 transition duration-300 shadow-md"
        >
          🚀 Login / Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
