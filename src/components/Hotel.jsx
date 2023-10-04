
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';


import { Pagination } from 'swiper/modules';

import { BsArrowsMove } from "react-icons/bs";
import { BiBed } from "react-icons/bi";
import { AiOutlineHeart } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { LiaBathSolid } from "react-icons/lia";

const Hotel = ({ item }) => {
    console.log(item);
    const { _id, images, location, price, properties, property_type, title } = item || {};
    // console.log(_id, category, images, location, price, properties, property_type, title);
    return (
        <div className=" h-[530px] px-4 py-3 shadow-xl drop-shadow-2xl border rounded-2xl bg-[#e0ecf7]" >
            <>
                <Swiper
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Pagination]}
                >
                    {
                        images?.map((image, index) => <SwiperSlide
                            className='rounded-2xl relative'
                            key={index}
                        >
                            <img className='w-full h-[280px] rounded-2xl' src={image} alt="" />

                            <p className='bg-white text-blue-900 font-semibold px-3 py-1 rounded-3xl flex items-center absolute top-3 left-3 '>For {property_type}</p>
                            <p className='bg-white h-8 w-8 flex items-center justify-center rounded-full absolute top-3 right-3'>
                                <AiOutlineHeart className='text-blue-900 h-5 w-5 ' />
                            </p>
                            {/* </div> */}
                        </SwiperSlide>)
                    }

                </Swiper>
            </>
            {/* card body */}
            <div className='text-gray-700 mt-5 px-2 '>
                <small className='flex items-center gap-2 font-semibold py-1'><CiLocationOn /> {location}</small>
                <h3 className='text-[20px] font-bold py-1 '>{title}</h3>
                <div className='flex gap-8 py-3 px-3'>
                    <p>
                        <HiOutlineBuildingOffice2 className='h-5 w-5' />
                        <small className='font-semibold'> {properties?.rooms} Room</small>
                    </p>
                    <p>
                        <BiBed className='h-5 w-5' />
                        <small className='font-semibold'> {properties?.bed} Bed</small>
                    </p>
                    <p>
                        <LiaBathSolid className='h-5 w-5' />
                        <small className='font-semibold'> {properties?.bath} Bath</small>
                    </p>
                    <p>
                        <BsArrowsMove className='h-5 w-5' />
                        <small className='font-semibold'> {properties?.sft} sft</small>
                    </p>
                </div>
                <div className='bg-gray-300 h-[1px] my-1' />
                {/*  */}
                <div className='py-2 flex items-center justify-between'>
                    <h3 className='text-[22px] font-bold py-1 text-blue-900'>{price}<small className='text-gray-600'>/month</small> </h3>

                    <button className="bg-transparent border border-blue-900 text-blue-900 px-4 py-2 rounded-3xl  font-semibold flex items-center gap-1 hover:bg-blue-900 hover:text-white">
                        Read More
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hotel;