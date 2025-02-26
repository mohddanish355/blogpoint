import homepageImage from "../assets/homepage_image.png";

export const Homeheader = () => {
  return (
    <div className="mt-8 ">
      <div className="flex flex-col items-center font-mono">
        <span className="absolute top-[15%] text-lg font-semibold text-gray-600 tracking-wide uppercase">Whispers of the Soul</span>
        <span className="absolute top-[15%] text-2xl font-light text-gray-800 italic mt-6">Reflections, Stories, and Inspiration</span>
      </div>
      <div className="flex-grow flex item-center justify-center w-full overflow-hidden">
        <img src={homepageImage} alt="Introductory image" className="w-[890px] h-full mt-10 object-cover border-2 border-gray-500"/>
      </div>
      <p className="text-gray-600 text-center mt-4 max-w-lg mx-auto">
  A space to reflect, share, and find inspiration through meaningful stories and thoughts.
</p>
    </div>
  )
}

