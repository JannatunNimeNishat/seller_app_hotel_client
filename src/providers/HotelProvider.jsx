import { useEffect, useState } from "react";
import { createContext } from "react";

import data from '../../public/properties.json';

export const HotelContext = createContext();

const HotelProvider = ({ children }) => {
    // 
    const [allHotels, setAllHotels] = useState(data);
    //
    const [hotels, setHotels] = useState(data);

    const [activeTab, setActiveTab] = useState('new_york')

    const [lastIndex, setLastIndex] = useState(6)

    const [singleHotel, setSingleHotel] = useState({});


    useEffect(() => {
        handleActiveTab('new_york')
    }, [])

    const handleActiveTab = (tabValue) => {
        setLastIndex(6);
        setActiveTab(tabValue)
        const tabValues = data.filter(item => item.category === tabValue);
        setHotels(tabValues);
    }
    const handleSetLastIndex = () => {
        setLastIndex(9);
    }

    // handle single property 
    const handleSinglePropertyPage = (id) =>{
       
        const singleProperty = data.filter(item => item._id === parseInt(id));
        setSingleHotel(singleProperty);
    }


    const values = {
        hotels,
        activeTab,
        handleActiveTab,
        lastIndex,
        handleSetLastIndex,
        handleSinglePropertyPage,
        singleHotel,
    }
    return (
        <HotelContext.Provider value={values}>
            {children}
        </HotelContext.Provider>
    );
};

export default HotelProvider;