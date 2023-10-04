import { useContext } from "react"
import { HotelContext } from "./providers/HotelProvider"
import Filters from "./components/Filters";
import Hotel from "./components/Hotel";

import { GiSandsOfTime } from "react-icons/gi";

function App() {
  const { hotels, handleSetLastIndex, lastIndex } = useContext(HotelContext);


  return (
    <div className="my-container my-5">
      <Filters />
      {/* cards */}
      {/* cars section */}
      <div className="grid grid-cols-3 gap-5 my-10 ">
        {
          hotels.slice(0, lastIndex).map((item, index) => <Hotel
            key={index}
            item={item}
          />)
        }
      </div>
      <div className="w-full flex justify-center">
        <button
          className={`${lastIndex === 9 ? 'invisible' : ''} text-white bg-blue-900  px-5 py-3 rounded-3xl font-semibold
       flex gap-2 text-center border  `}
          onClick={handleSetLastIndex}
        >
          <GiSandsOfTime className="h-6 w-6" />
          Load more</button>
      </div>
    </div>
  )
}

export default App
