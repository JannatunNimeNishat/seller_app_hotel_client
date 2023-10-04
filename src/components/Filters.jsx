import { useContext } from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { HotelContext } from "../providers/HotelProvider";

const Filters = () => {
    const { activeTab, handleActiveTab } = useContext(HotelContext);
    return (
        <div className=" flex justify-between items-center mt-8">
            <div className="flex gap-3">
                <button className={`
                 px-5 py-3 rounded-3xl  font-semibold
                ${activeTab === 'new_york' ? 'text-white bg-blue-900 ' : 'text-gray-600 bg-[#d4cef7b0]'}
                `}
                    onClick={() => handleActiveTab('new_york')}
                >New York</button>

                <button className={` px-5 py-3 rounded-3xl font-semibold
                ${activeTab === 'mumbai' ? 'text-white bg-blue-900 ' : 'text-gray-600 bg-[#d4cef7b0]'}
                `}
                    onClick={() => handleActiveTab('mumbai')}
                >Mumbai</button>

                <button className={`px-5 py-3 rounded-3xl  font-semibold
                ${activeTab === 'paris' ? 'text-white bg-blue-900 ' : 'text-gray-600 bg-[#d4cef7b0]'}
                
                `}
                    onClick={() => handleActiveTab('paris')}
                >Paris</button>

                <button className={`bg-[#d4cef7b0] px-5 py-3 rounded-3xl text-gray-600 font-semibold
                  ${activeTab === 'london' ? 'text-white bg-blue-900 ' : 'text-gray-600 bg-[#d4cef7b0]'}
                `}
                onClick={() => handleActiveTab('london')}
                >London</button>
            </div>
            <button className="bg-transparent border border-blue-900 text-blue-900 px-5 py-3 rounded-3xl  font-semibold flex items-center gap-1 hover:bg-blue-900 hover:text-white">
                View All
                <BsArrowRightShort className="text-blue-900 hover:text-white h-6 w-8" />
            </button>
        </div>
    );
};

export default Filters;