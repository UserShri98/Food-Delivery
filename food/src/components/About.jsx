const About = () => {
  return (
    <div className="min-h-screen bg-white px-6 py-10">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-green-700 mb-4">About Us</h1>
        <p className="text-gray-600 text-lg mb-8">
          Welcome to <span className="font-semibold text-green-700">FoodApp</span> — your one-stop destination for discovering the best restaurants, browsing grocery essentials, and ordering your favorite food.
        </p>
      </div>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 mt-10">
        {/* Section 1: About the App */}
        <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">🍽️ Our Mission</h2>
          <p className="text-gray-700">
            We aim to connect food lovers with top-rated restaurants and grocery stores nearby. Whether you're craving a spicy biryani or just need fresh veggies, we’ve got you covered with seamless browsing and ordering.
          </p>
        </div>

        {/* Section 2: About the Team */}
        <div className="bg-green-50 p-6 rounded-xl shadow-md hover:shadow-lg transition-all">
          <h2 className="text-2xl font-semibold text-green-800 mb-2">👨‍💻 Meet the Creator</h2>
          <p className="text-gray-700">
            Hi! I'm <span className="font-medium text-green-700">Shrinath</span>, a passionate full-stack developer who built this app using React, Tailwind CSS, and modern web tech. I love solving real-world problems through code and constantly improving UX/UI.
          </p>
        </div>
      </div>

      <div className="text-center mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} FoodApp. Built with ❤️ by Shrinath.
      </div>
    </div>
  );
};

export default About;
