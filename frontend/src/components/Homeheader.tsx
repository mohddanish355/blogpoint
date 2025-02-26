import homepageImage from "../assets/homepage_image.png";

export const Homeheader = () => {
  return (
    <div className="mt-8 flex flex-col items-center">
    {/* Header Text */}
    <div className="text-center font-mono">
      <span className="block text-lg sm:text-sm md:text-xl font-semibold text-gray-600 tracking-wide uppercase">
        Whispers of the Soul
      </span>
      <span className="block text-2xl sm:text-lg md:text-3xl font-light text-gray-800 italic mt-2">
        Reflections, Stories, and Inspiration
      </span>
    </div>
  
    {/* Image Section */}
    <div className="flex justify-center w-full overflow-hidden">
      <img
        src={homepageImage}
        alt="Introductory image"
        className="w-full max-w-[890px] h-auto mt-10 object-cover border-2 border-gray-500"
      />
    </div>
  
    {/* Paragraph */}
    <p className="text-gray-600 text-center mt-4 max-w-lg mx-auto px-4">
      A space to reflect, share, and find inspiration through meaningful stories and thoughts.
    </p>
  </div> 
  )
}

 


