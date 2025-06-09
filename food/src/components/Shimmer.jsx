const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center mt-8">
      {Array(12).fill("").map((_, index) => (
        <div
          key={index}
          className="w-[180px] h-[260px] bg-gray-200 dark:bg-gray-700 m-4 p-4 rounded-lg animate-pulse"
        >
          <div className="h-32 bg-gray-300 dark:bg-gray-600 rounded-md mb-4"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 rounded"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 mb-2 rounded w-2/3"></div>
          <div className="h-4 bg-gray-300 dark:bg-gray-600 rounded w-1/2"></div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
