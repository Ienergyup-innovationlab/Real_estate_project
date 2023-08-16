import Footer from "./Footer";
import Header from "./Header";
import Agent from '../images/Agentpic.png'
import { FaPhoneAlt, FaLocationArrow, FaWhatsapp, FaWhatsappSquare, FaStar, FaStarHalf, FaStarOfLife, FaStarAndCrescent, FaStarOfDavid } from "react-icons/fa"

export default function Agents() {
    // the below will be used when we get the data from the backend
    // const Agent = AgentData.map((index, agent=>{
    //     return(
    //         <div className="py-[2.5rem] px-[1.8rem] -mb-[2rem]">
    //             <div className="w-full h-[13.5rem] shadow-xl rounded-xl p-[1.4rem] pl-[2rem] pb-[1rem] border-2 border-gray-100 flex justify-between">
    //                 <div className="w-[16.5rem] h-full -mt-[0.4rem] flex flex-col justyify-between">
    //                     <div>
    //                         <img className="mb-[0.8rem] rounded-lg h-[9rem] w-[14.5rem]" src={Agent.pic} alt="Agent1" />
    //                     </div>
    //                     <div className="flex justify-around w-[14rem]">
    //                         <div className="mr-[0.8rem] p-1 flex text-xs rounded-sm justify-around ml-1 bg-amber-300">
    //                             <div><FaPhoneAlt/></div> 
    //                             <div><p className="mx-2">{Agent.phone}</p></div>                           
    //                         </div>
    //                         <div className="p-1 flex text-xs rounded-sm justify-around bg-amber-300">
    //                             <div><FaWhatsappSquare/></div> 
    //                             <div><p className="mx-2">{Agent.whatsapp}</p></div>                           
    //                         </div>
    //                     </div>
    //                 </div>
    //                 <div className="flex flex-col justify-center">
    //                     <h1 className="text-xl font-semibold -mt-[3.85rem] mb-[0.5rem]">{Agent.branch}</h1>
    //                     <div className="flex justify-around">
    //                         <FaLocationArrow/> 
    //                         <p className="font-semibold text-md mb-[0.25rem]">{Agent.location}</p>
    //                     </div>
    //                     <div className="my-[0.85rem] flex justify-around font-extralight text-xs">
    //                         {Agent.services.map(service=>{
    //                             return(
    //                                 <div className="border-r-2 border-gray-500 pr-[0.7rem]">{service}</div>
    //                             )
    //                         })}
                            
    //                     </div>
    //                     <p className="font-semibold text-sm">{Agent.registerdate}</p>
    //                 </div>
    //                 <div className="flex flex-col justify-between h-[10.65rem]">
    //                     <div><button className="w-[7.5rem] rounded-md p-1 -mr-[0.5rem] bg-amber-500 font-bold text-sm">View Profile</button></div>
    //                     <div className="flex justify-around font-semibold text-sm">
    //                         <div><p>{Agent.rating}</p></div>
    //                         {(agent.rating.length)*<div className="flex justify-around"><FaStar/></div>}
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     )
    // }))
    return(
        <section className="mt-[2rem]">
            <Header/>
            <div className="py-[2.5rem] px-[1.8rem] -mb-[2rem]">
                <div className="w-full h-[13.5rem] shadow-xl rounded-xl p-[1.4rem] pl-[2rem] pb-[1rem] border-2 border-gray-100 flex justify-between">
                    <div className="w-[16.5rem] h-full -mt-[0.4rem] flex flex-col justyify-between">
                        <div>
                            <img className="mb-[0.8rem] rounded-lg h-[9rem] w-[14.5rem]" src={Agent} alt="Agent" />
                        </div>
                        <div className="flex justify-around w-[14rem]">
                            <div className="mr-[0.8rem] p-1 flex text-xs rounded-sm justify-around ml-1 bg-amber-300">
                                <div><FaPhoneAlt/></div> 
                                <div><p className="mx-2">09045344556</p></div>                           
                            </div>
                            <div className="p-1 flex text-xs rounded-sm justify-around bg-amber-300">
                                <div><FaWhatsappSquare/></div> 
                                <div><p className="mx-2">09045344556</p></div>                           
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl font-semibold -mt-[3.85rem] mb-[0.5rem]">Oakshield Realtors</h1>
                        <div className="flex justify-around">
                            <FaLocationArrow/> 
                            <p className="font-semibold text-md mb-[0.25rem]">Lagos Mainland</p>
                        </div>
                        <div className="my-[0.85rem] flex justify-around font-extralight text-xs">
                            <div className="border-r-2 border-gray-500 pr-[0.7rem]">sales</div>
                            <div className="border-r-2 border-gray-500 pr-[0.7rem]">shortlet</div>
                            <div className="border-r-2 border-gray-500 pr-[0.7rem]">Rent</div>
                        </div>
                        <p className="font-semibold text-sm">Registered on Apr 23, 2023</p>
                    </div>
                    <div className="flex flex-col justify-between h-[10.65rem]">
                        <div><button className="w-[7.5rem] rounded-md p-1 -mr-[0.5rem] bg-amber-500 font-bold text-sm">View Profile</button></div>
                        <div className="flex justify-around font-semibold text-sm">
                            <div><p>3.5</p></div>
                            <div className="flex justify-around"><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[2.5rem] px-[1.8rem] -mb-[2rem]">
                <div className="w-full h-[13.5rem] shadow-xl rounded-xl p-[1.4rem] pl-[2rem] pb-[1rem] border-2 border-gray-100 flex justify-between">
                    <div className="w-[16.5rem] h-full -mt-[0.4rem] flex flex-col justyify-between">
                        <div>
                            <img className="mb-[0.8rem] rounded-lg h-[9rem] w-[14.5rem]" src={Agent} alt="Agent" />
                        </div>
                        <div className="flex justify-around w-[14rem]">
                            <div className="mr-[0.8rem] p-1 flex text-xs rounded-sm justify-around ml-1 bg-amber-300">
                                <div><FaPhoneAlt/></div> 
                                <div><p className="mx-2">09045344556</p></div>                           
                            </div>
                            <div className="p-1 flex text-xs rounded-sm justify-around bg-amber-300">
                                <div><FaWhatsappSquare/></div> 
                                <div><p className="mx-2">09045344556</p></div>                           
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl font-semibold -mt-[3.85rem] mb-[0.5rem]">Oakshield Realtors</h1>
                        <div className="flex justify-around">
                            <FaLocationArrow/> 
                            <p className="font-semibold text-md mb-[0.25rem]">Lagos Mainland</p>
                        </div>
                        <div className="my-[0.85rem] flex justify-around font-extralight text-xs">
                            <div className="border-r-2 border-gray-500 pr-[0.7rem]">sales</div>
                            <div className="border-r-2 border-gray-500 pr-[0.7rem]">shortlet</div>
                            <div className="border-r-2 border-gray-500 pr-[0.7rem]">Rent</div>
                        </div>
                        <p className="font-semibold text-sm">Registered on Apr 23, 2023</p>
                    </div>
                    <div className="flex flex-col justify-between h-[10.65rem]">
                        <div><button className="w-[7.5rem] rounded-md p-1 -mr-[0.5rem] bg-amber-500 font-bold text-sm">View Profile</button></div>
                        <div className="flex justify-around font-semibold text-sm">
                            <div><p>3.5</p></div>
                            <div className="flex justify-around"><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-[2.5rem] px-[1.8rem] -mb-[2rem]">
                <div className="w-full h-[13.5rem] shadow-xl rounded-xl p-[1.4rem] pl-[2rem] pb-[1rem] border-2 border-gray-100 flex justify-between">
                    <div className="w-[16.5rem] h-full -mt-[0.4rem] flex flex-col justyify-between">
                        <div>
                            <img className="mb-[0.8rem] rounded-lg h-[9rem] w-[14.5rem]" src={Agent} alt="Agent" />
                        </div>
                        <div className="flex justify-around w-[14rem]">
                            <div className="mr-[0.8rem] p-1 flex text-xs rounded-sm justify-around ml-1 bg-amber-300">
                                <div><FaPhoneAlt/></div> 
                                <div><p className="mx-2">09045344556</p></div>                           
                            </div>
                            <div className="p-1 flex text-xs rounded-sm justify-around bg-amber-300">
                                <div><FaWhatsappSquare/></div> 
                                <div><p className="mx-2">09045344556</p></div>                           
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl font-semibold -mt-[3.85rem] mb-[0.5rem]">Oakshield Realtors</h1>
                        <div className="flex justify-around">
                            <FaLocationArrow/> 
                            <p className="font-semibold text-md mb-[0.25rem]">Lagos Mainland</p>
                        </div>
                        <div className="my-[0.85rem] flex justify-around font-extralight text-xs">
                            <div className="border-r-2 border-gray-500 pr-[0.7rem]">sales</div>
                            <div className="border-r-2 border-gray-500 pr-[0.7rem]">shortlet</div>
                            <div className="border-r-2 border-gray-500 pr-[0.7rem]">Rent</div>
                        </div>
                        <p className="font-semibold text-sm">Registered on Apr 23, 2023</p>
                    </div>
                    <div className="flex flex-col justify-between h-[10.65rem]">
                        <div><button className="w-[7.5rem] rounded-md p-1 -mr-[0.5rem] bg-amber-500 font-bold text-sm">View Profile</button></div>
                        <div className="flex justify-around font-semibold text-sm">
                            <div><p>3.5</p></div>
                            <div className="flex justify-around"><FaStar/><FaStar/><FaStar/><FaStarHalf/></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </section>
    )    
}