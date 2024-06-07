import { FaSun, FaGlobe, FaShieldAlt, FaBolt } from 'react-icons/fa';

export function Infographics() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="relative flex items-center justify-center h-64 w-64">
        <div></div>
        <div className="absolute animate-spin-slow h-40 w-40 rounded-full border border-dashed border-gray-500">
          <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
            <FaGlobe className="h-8 w-8 text-blue-500" />
          </div>
          <div className="absolute animate-spin-slower h-32 w-32 rounded-full border border-dashed border-gray-400 top-4 left-4">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
              <FaShieldAlt className="h-8 w-8 text-green-500" />
            </div>
            <div className="absolute animate-spin-slowest h-24 w-24 rounded-full border border-dashed border-gray-300 top-4 left-4">
              <div className="absolute -top-6 left-1/2 transform -translate-x-1/2">
                <FaBolt className="h-8 w-8 text-yellow-500" />
              </div>
              <div className="absolute h-16 w-16 bg-orange-500 rounded-full flex items-center justify-center top-4 left-4">
                <FaSun className="h-8 w-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Infographics;
