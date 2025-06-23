function NewSeller() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-yellow-100 via-yellow-200 to-lime-100">
      <form className="bg-white rounded-2xl shadow-xl px-10 py-12 w-full max-w-md space-y-6 border border-yellow-300 
                      hover:shadow-[0px_0px_40px_5px_rgba(154, 242, 102, 0.5)] 
                      transition duration-300">
        <h2 className="text-3xl font-extrabold text-center text-yellow-800">📦 Add New Seller</h2>

        <input
          type="text"
          placeholder="e.g. Ankita Cooking Store"
          className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 
                      hover:border-yellow-500 hover:shadow-[0px_0px_15px_2px_rgba(154,242,102,0.3)] 
                      transition duration-300"
        />
        <input
          type="email"
          placeholder="dhaba440@email.com"
          className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 
                      hover:border-yellow-500 hover:shadow-[0px_0px_15px_2px_rgba(154,242,102,0.3)] 
                      transition duration-300"
        />
        <input
          type="text"
          placeholder="e.g. Ankita-DA-Dhaba"
          className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 
                      hover:border-yellow-500 hover:shadow-[0px_0px_15px_2px_rgba(154,242,102,0.3)] 
                      transition duration-300"
        />
        <input
          type="tel"
          placeholder="+919876543210"
          className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 
                      hover:border-yellow-500 hover:shadow-[0px_0px_15px_2px_rgba(154,242,102,0.3)] 
                      transition duration-300"
        />
        <input
          type="text"
          placeholder="City, Street, Pincode"
          className="w-full p-3 border border-yellow-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 
                      hover:border-yellow-500 hover:shadow-[0px_0px_15px_2px_rgba(154,242,102,0.3)] 
                      transition duration-300"
        />

        <button
          type="submit"
          className="w-full py-3 bg-gradient-to-r from-yellow-500 to-lime-500 text-white font-semibold rounded-lg shadow 
                      hover:from-yellow-600 hover:to-lime-600 
                      hover:shadow-[0px_0px_30px_5px_rgba(154,242,102,0.5)] 
                      transition duration-300"
        >
          ✅ Add Seller
        </button>
      </form>
    </div>
  );
}

export default NewSeller;
