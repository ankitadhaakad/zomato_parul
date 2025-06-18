function Products() {
  return (
    <div className="p-10 bg-white min-h-screen">
      <h2 className="text-3xl font-bold text-center mb-10">Our Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {[1, 2, 3, 4, 5].map((item) => (
          <div key={item} className="p-6 shadow-md rounded-lg bg-white hover:shadow-xl transition">
            <div className="text-3xl mb-2">🛒</div>
            <h3 className="text-xl font-bold">Product {item}</h3>
            <p className="text-gray-600">This is a short product description with some useful info.</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
