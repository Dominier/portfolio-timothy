import Image from "next/image";


export default function HomePage() {
  return (
    <div className="selection:bg-gray-500 selection:text-[#f1f1f2]">
      {/* Timothy Logo */}
      <div className="w-[100%] p-5">
        <h1 className="text-7xl font-semibold text-center drop-shadow-lg">
          Timothy
        </h1>
      </div>

      {/* Search bar */}
      <div className="flex m-5 rounded-3xl w-[60%] h-[40px] bg-[#f1f1f2] ml-auto mr-auto pl-3 pr-3 shadow-lg">
        {/* Search Logo */}
        <Image 
          src='/search.svg'
          width={18}
          height={18}
          alt="search icon"
        />

        {/* Text */}
        <p className="flex pl-2 text-[#6e7077] items-center">
          Think, Plan, Create...
        </p>

        {/* Camera Logo */}
        <Image 
          src='/camera.svg'
          width={18}
          height={18}
          alt="camera icon"
          className="relative ml-auto"
        />

      </div>

      {/* List of Projects Icons */}
      <div className="grid grid-cols-4 border border-white">
        <div className="border border-blue-200">
          Card 1
        </div>
      </div>


    </div>
  )
}
