import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const handleExploreClick = () => {
    navigate("/products");
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-16 bg-gradient-to-r from-lime-100 to-yellow-100 min-h-screen">
      <div className="text-center lg:text-left lg:w-1/2">
        <h1 className="text-5xl font-extrabold text-purple-800 mb-4">Welcome</h1>
        <p className="text-3xl font-semibold text-blue-700">To Ultimate</p>
        <p className="text-xl font-bold text-red-700 mt-2">Food Delivery App — Parul-Zomato</p>
        <p className="italic text-gray-700 mt-2">“Good Food with Good Mindset” 🍽️</p>
        <button
          onClick={handleExploreClick}
          className="mt-6 bg-purple-600 hover:bg-purple-700 transition duration-300 text-white px-6 py-3 rounded-full font-semibold shadow-lg"
        >
          Explore Now 🚀
        </button>
      </div>

      <div className="mb-10 lg:mb-0 lg:w-1/2 flex justify-center">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
          alt="Delicious Food"
          className="w-full h-[400px] object-cover rounded-xl shadow-2xl border-4 border-white"
        />
      </div>
    </div>
  );
}

export default Home;
