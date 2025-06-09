const Grocery = () => {
  const groceryItems = [
    { name: "Fresh Fruits", emoji: "🍎" },
    { name: "Vegetables", emoji: "🥦" },
    { name: "Dairy Products", emoji: "🥛" },
    { name: "Snacks", emoji: "🍪" },
    { name: "Beverages", emoji: "🥤" },
    { name: "Bakery", emoji: "🥐" },
    { name: "Spices", emoji: "🌶️" },
    { name: "Grains & Pulses", emoji: "🌾" },
  ];

  return (
    <div className="min-h-screen bg-green-50 px-6 py-8">
      <h1 className="text-3xl font-bold text-center text-green-800 mb-6">
        🛒 Welcome to Grocery Store
      </h1>

      <p className="text-center text-gray-700 mb-10 max-w-xl mx-auto">
        Browse our wide selection of grocery items. Fresh, quality products delivered right to your doorstep.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {groceryItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all text-center"
          >
            <div className="text-4xl mb-2">{item.emoji}</div>
            <h2 className="text-lg font-semibold text-gray-800">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grocery;
