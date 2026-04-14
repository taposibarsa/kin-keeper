import { FaPlus } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto text-center px-6">
        
        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
          Friends to keep close in your life
        </h1>

        {/* Subtitle */}
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.
        </p>

        {/* Button */}
        <div className="mt-6">
          <button className="inline-flex items-center gap-2 bg-[#244D3F] text-white px-5 py-2.5 rounded-md text-[16px] font-medium hover:bg-green-800 transition">
            <FaPlus />Add a Friend
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          
          <div className="bg-white rounded-xl shadow-sm  p-6">
            <h2 className="text-3xl font-semibold text-[#244D3F]">10</h2>
            <p className="text-[#64748B] text-lg mt-1">Total Friends</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-[#244D3F]">3</h2>
            <p className="text-[#64748B] text-lg mt-1">On Track</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-[#244D3F]">6</h2>
            <p className="text-[#64748B] text-lg mt-1">Need Attention</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-3xl font-semibold text-[#244D3F]">12</h2>
            <p className="text-[#64748B] text-lg mt-1">Interactions This Month</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;