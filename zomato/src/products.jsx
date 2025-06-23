function Products() {
  const products = [
    {
      id: 1,
      name: "Raspberry Cake",
      description: "Delicious and creamy raspberry cake topped with fresh raspberries.",
      image:
        "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      name: "Vegetable Salad",
      description: "Fresh, colorful salad with veggies, onions, and herbs.",
      image:
        "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      name: "Noodle Bowl",
      description: "Spicy noodles topped with vegetables, served in a rustic bowl.",
      image:
        "https://media.istockphoto.com/id/1144501138/photo/manchurian-hakka-schezwan-noodles-popular-indochinese-food-served-in-a-bowl-selective-focus.jpg?s=612x612&w=0&k=20&c=jFpKPWghvwUoBN88QtLMtcVybrHlUBnQOpePcew5K_g=",
    },
    {
      id: 4,
      name: "Classic Pizza",
      description: "Cheesy pizza topped with tomato sauce and a crisp golden crust.",
      image:
        "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      name: "Deluxe Burger",
      description: "Juicy burgers stacked with fresh lettuce, tomato, and cheese.",
      image:
        "https://plus.unsplash.com/premium_photo-1683619761464-6b7c9a2716a8?w=600&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="p-10 bg-gradient-to-r from-yellow-100 via-yellow-200 to-lime-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-yellow-800 mb-10">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="p-6 rounded-2xl bg-white shadow-md border border-yellow-300 hover:shadow-[0px_0px_30px_5px_rgba(154,242,102,0.5)] hover:scale-105 transform transition duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-bold text-yellow-800">{product.name}</h3>
            <p className="text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
