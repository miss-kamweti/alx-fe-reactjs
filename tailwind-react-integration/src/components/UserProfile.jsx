function UserProfile() {
  return (
    <div className="
      bg-gray-100 
      p-4 sm:p-6 md:p-8 
      max-w-xs sm:max-w-xs md:max-w-sm 
      mx-auto my-10 sm:my-16 md:my-20 
      rounded-lg 
      shadow-lg
      transition-all duration-300 ease-in-out
      hover:shadow-xl
      hover:-translate-y-1
    ">
      <img 
        src="https://via.placeholder.com/150" 
        alt="User" 
        className="
          rounded-full 
          w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 
          mx-auto
          transition-transform duration-300 ease-in-out
          hover:scale-110
          border-4 border-white
          shadow-md
        "
      />
      <h1 className="
        text-lg sm:text-xl md:text-2xl 
        text-blue-800 
        my-3 sm:my-4
        transition-colors duration-200
        hover:text-blue-600
        cursor-default
        font-semibold
      ">
        John Doe
      </h1>
      <p className="
        text-gray-600 
        text-sm sm:text-base
        transition-colors duration-200
        hover:text-gray-800
        cursor-default
        leading-relaxed
      ">
        Developer at Example Co. Loves to write code and explore new technologies.
      </p>
    </div>
  );
}

export default UserProfile;