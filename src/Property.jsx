import { useParams } from "react-router-dom";
import Hotel from "./components/Hotel";
import { useContext, useEffect } from "react";
import { HotelContext } from "./providers/HotelProvider";



const Property = () => {

    const { id } = useParams();
    const { handleSinglePropertyPage, singleHotel } = useContext(HotelContext);


    useEffect(() => {
        handleSinglePropertyPage(id)
    }, [])

    return (
        <div className="px-80 my-10">
            <Hotel
                item={singleHotel[0]}
            />
        </div>
    );
};

export default Property;