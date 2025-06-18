function NewSeller() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300">
      <form className="bg-white rounded-2xl shadow-xl px-10 py-12 w-full max-w-md space-y-6 border border-blue-200">
        <h2 className="text-3xl font-extrabold text-center text-blue-700">📦 Add New Seller</h2>

        <input
          type="text"
          placeholder="e.g. Rahul Traders"
          className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <input
          type="email"
          placeholder="seller@email.com"
          className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <input
          type="text"
          placeholder="e.g. Rahul Kirana Store"
          className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <input
          type="tel"
          placeholder="9876543210"
          className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />
        <input
          type="text"
          placeholder="City, Street, Pincode"
          className="w-full p-3 border border-blue-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-blue-500 to-blue-700 text-white font-semibold rounded-lg shadow hover:from-blue-600 hover:to-blue-800 transition duration-300"
        >
          ✅ Add Seller
        </button>
      </form>
    </div>
  );
}

export default NewSeller;
