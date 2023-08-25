import Footer from "./Footer";
import Header from "./Header";
// import Agent from '../images/Agentpic.png'
import Houses from '../images/houses.png'                                                                  
import Client from '../images/clientimg.png'                                                                  
import carou1 from '../images/carou1.png'                                                                  
import carou2 from '../images/carou2.png'
import carou3 from '../images/carou3.png'
import carou4 from '../images/carou4.png'
import carou5 from '../images/carou5.png'
import carou6 from '../images/carou6.png'
import { FaBed, FaBath } from "react-icons/fa"
import Carousel from "react-multi-carousel"
import "react-multi-carousel/lib/styles.css"

export default function MortagePage(){
    const responsive = {
        superLargeDesktop : {
            breakpoint:{max : 4000, min : 3000},
            items: 5
        },
        desktop : {
            breakpoint:{max : 3000, min : 1024},
            items: 4
        },
        tablet : {
            breakpoint:{max : 1024, min : 464},
            items: 4
        },
        mobile: {
            breakpoint:{max : 464, min : 0},
            items: 1
        },
}
    return(
        <>
        <Header/>
            <div className="bg-Mortagebg w-full h-[22rem] p-[1rem] bg-cover -mb-[0.85rem] flex flex-col place-items-center justify-center">
                <h1 className="text-white font-bold text-[2.25rem] mb-[0.3rem]">Buy Your Mortage Home With Confidence</h1>
                <p className="text-white">iEnergy is making it simpler to buy your Mortage home and move your dreams forward</p>
            </div>
            <div className="mb-[3rem]">
                <div className="py-[2.5rem] px-[1.8rem] -mb-[4rem]">
                <div className="w-full h-[18rem] shadow-lg rounded-xl p-[1.4rem] pl-[2.5rem] pt-[5rem] border-2 border-gray-100 flex justify-between">
                    <div className="w-[20.5rem] -mt-[2.15rem] h-[13.3rem]">
                        <div>
                            <img className="mb-[0.8rem] rounded-lg h-[13.05rem] w-full" src={Houses} alt="Agent" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl font-semibold -mt-[3.85rem] mb-[0.7rem]">4 Bedroom Bungalow</h1>
                        <div>
                            <div>
                                <p className="font-light text-[0.85rem] tracking-widest mb-[0.23rem]">123 Obodo, Venue, Houston, Texas</p>
                            </div>
                            <div className="w-[14.5rem] flex justify-around font-light mb-[0.5rem]">
                                <div className="w-[7rem] flex flex-between">
                                <FaBed className="mr-[0.45rem]"/> 
                                    <p className="text-[0.825rem]">4 Bedroom </p>
                                </div>
                                <div className="w-[7rem] flex flex-between">
                                <FaBath className="mr-[0.45rem]"/> 
                                    <p className="text-[0.825rem]">5 Bathroom </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around w-[15.2rem] ml-[0.4rem] mb-[0.25rem]">
                            <p className="font-semibold text-[0.56rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit neque iste, reprehenderit totam delectus esse rem dolore, officia, facilis atque? Rem sapiente quaerat odio aperiam placeat at explicabo cumque!</p>
                        </div> 
                        <p className="font-semibold text-[1.45rem] text-center mb-[0.95rem] mt-[0.35rem]">N9,000.00/monthly</p>
                        <div className="flex justify-between w-[16rem]">
                            <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">More</button>
                            <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">Lease</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="py-[2.5rem] px-[1.8rem] -mb-[4rem]">
                <div className="w-full h-[18rem] shadow-lg rounded-xl p-[1.4rem] pl-[2.5rem] pt-[5rem] border-2 border-gray-100 flex justify-between">
                    <div className="w-[20.5rem] -mt-[2.15rem] h-[13.3rem]">
                        <div>
                            <img className="mb-[0.8rem] rounded-lg h-[13.05rem] w-full" src={Houses} alt="Agent" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl font-semibold -mt-[3.85rem] mb-[0.7rem]">4 Bedroom Bungalow</h1>
                        <div>
                            <div>
                                <p className="font-light text-[0.85rem] tracking-widest mb-[0.23rem]">123 Obodo, Venue, Houston, Texas</p>
                            </div>
                            <div className="w-[14.5rem] flex justify-around font-light mb-[0.5rem]">
                                <div className="w-[7rem] flex flex-between">
                                <FaBed className="mr-[0.45rem]"/> 
                                    <p className="text-[0.825rem]">4 Bedroom </p>
                                </div>
                                <div className="w-[7rem] flex flex-between">
                                <FaBath className="mr-[0.45rem]"/> 
                                    <p className="text-[0.825rem]">5 Bathroom </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around w-[15.2rem] ml-[0.4rem] mb-[0.25rem]">
                            <p className="font-semibold text-[0.56rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit neque iste, reprehenderit totam delectus esse rem dolore, officia, facilis atque? Rem sapiente quaerat odio aperiam placeat at explicabo cumque!</p>
                        </div> 
                        <p className="font-semibold text-[1.45rem] text-center mb-[0.95rem] mt-[0.35rem]">N9,000.00/monthly</p>
                        <div className="flex justify-between w-[16rem]">
                            <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">More</button>
                            <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">Lease</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="py-[2.5rem] px-[1.8rem] -mb-[4rem]">
                <div className="w-full h-[18rem] shadow-lg rounded-xl p-[1.4rem] pl-[2.5rem] pt-[5rem] border-2 border-gray-100 flex justify-between">
                    <div className="w-[20.5rem] -mt-[2.15rem] h-[13.3rem]">
                        <div>
                            <img className="mb-[0.8rem] rounded-lg h-[13.05rem] w-full" src={Houses} alt="Agent" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl font-semibold -mt-[3.85rem] mb-[0.7rem]">4 Bedroom Bungalow</h1>
                        <div>
                            <div>
                                <p className="font-light text-[0.85rem] tracking-widest mb-[0.23rem]">123 Obodo, Venue, Houston, Texas</p>
                            </div>
                            <div className="w-[14.5rem] flex justify-around font-light mb-[0.5rem]">
                                <div className="w-[7rem] flex flex-between">
                                <FaBed className="mr-[0.45rem]"/> 
                                    <p className="text-[0.825rem]">4 Bedroom </p>
                                </div>
                                <div className="w-[7rem] flex flex-between">
                                <FaBath className="mr-[0.45rem]"/> 
                                    <p className="text-[0.825rem]">5 Bathroom </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around w-[15.2rem] ml-[0.4rem] mb-[0.25rem]">
                            <p className="font-semibold text-[0.56rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit neque iste, reprehenderit totam delectus esse rem dolore, officia, facilis atque? Rem sapiente quaerat odio aperiam placeat at explicabo cumque!</p>
                        </div> 
                        <p className="font-semibold text-[1.45rem] text-center mb-[0.95rem] mt-[0.35rem]">N9,000.00/monthly</p>
                        <div className="flex justify-between w-[16rem]">
                            <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">More</button>
                            <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">Lease</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="py-[2.5rem] px-[1.8rem] -mb-[4rem]">
                <div className="w-full h-[18rem] shadow-lg rounded-xl p-[1.4rem] pl-[2.5rem] pt-[5rem] border-2 border-gray-100 flex justify-between">
                    <div className="w-[20.5rem] -mt-[2.15rem] h-[13.3rem]">
                        <div>
                            <img className="mb-[0.8rem] rounded-lg h-[13.05rem] w-full" src={Houses} alt="Agent" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl font-semibold -mt-[3.85rem] mb-[0.7rem]">4 Bedroom Bungalow</h1>
                        <div>
                            <div>
                                <p className="font-light text-[0.85rem] tracking-widest mb-[0.23rem]">123 Obodo, Venue, Houston, Texas</p>
                            </div>
                            <div className="w-[14.5rem] flex justify-around font-light mb-[0.5rem]">
                                <div className="w-[7rem] flex flex-between">
                                <FaBed className="mr-[0.45rem]"/> 
                                    <p className="text-[0.825rem]">4 Bedroom </p>
                                </div>
                                <div className="w-[7rem] flex flex-between">
                                <FaBath className="mr-[0.45rem]"/> 
                                    <p className="text-[0.825rem]">5 Bathroom </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around w-[15.2rem] ml-[0.4rem] mb-[0.25rem]">
                            <p className="font-semibold text-[0.56rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit neque iste, reprehenderit totam delectus esse rem dolore, officia, facilis atque? Rem sapiente quaerat odio aperiam placeat at explicabo cumque!</p>
                        </div> 
                        <p className="font-semibold text-[1.45rem] text-center mb-[0.95rem] mt-[0.35rem]">N9,000.00/monthly</p>
                        <div className="flex justify-between w-[16rem]">
                            <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">More</button>
                            <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">Lease</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="py-[2.5rem] px-[1.8rem] -mb-[4rem]">
                <div className="w-full h-[18rem] shadow-lg rounded-xl p-[1.4rem] pl-[2.5rem] pt-[5rem] border-2 border-gray-100 flex justify-between">
                    <div className="w-[20.5rem] -mt-[2.15rem] h-[13.3rem]">
                        <div>
                            <img className="mb-[0.8rem] rounded-lg h-[13.05rem] w-full" src={Houses} alt="Agent" />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center">
                        <h1 className="text-xl font-semibold -mt-[3.85rem] mb-[0.7rem]">4 Bedroom Bungalow</h1>
                        <div>
                            <div>
                                <p className="font-light text-[0.85rem] tracking-widest mb-[0.23rem]">123 Obodo, Venue, Houston, Texas</p>
                            </div>
                            <div className="w-[14.5rem] flex justify-around font-light mb-[0.5rem]">
                                <div className="w-[7rem] flex flex-between">
                                <FaBed className="mr-[0.45rem]"/> 
                                    <p className="text-[0.825rem]">4 Bedroom </p>
                                </div>
                                <div className="w-[7rem] flex flex-between">
                                <FaBath className="mr-[0.45rem]"/> 
                                    <p className="text-[0.825rem]">5 Bathroom </p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-around w-[15.2rem] ml-[0.4rem] mb-[0.25rem]">
                            <p className="font-semibold text-[0.56rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore sit neque iste, reprehenderit totam delectus esse rem dolore, officia, facilis atque? Rem sapiente quaerat odio aperiam placeat at explicabo cumque!</p>
                        </div> 
                        <p className="font-semibold text-[1.45rem] text-center mb-[0.95rem] mt-[0.35rem]">N9,000.00/monthly</p>
                        <div className="flex justify-between w-[16rem]">
                            <button className="border-2 border-amber-300 bg-inherit p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">More</button>
                            <button className="border-2 bg-amber-400 p-[0.35rem] w-[7.5rem] rounded-lg font-semibold">Lease</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="px-[3.25rem] pb-[3rem]">
                <div className="text-center px-[1.2rem] mb-[4.5rem]">
                    <h1 className="font-bold text-[1.25rem] mb-[1rem]">Buy Your Mortage Home from a Trusted Local Agent</h1>
                    <p className="text-[0.78rem]">it is easy to buy your Home when we connect you to a participating partner.</p>
                    <p className="text-[0.78rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta qui, aspernatur earum molestias officia hic maiores perferendis, veniam accusamus ea nulla, </p>
                </div>
                <div className="flex justify-between">
                    <div>
                        <img className="h-[13rem] w-[26rem]" src={Client} alt="Agentimg" />
                    </div>
                    <div className="flex flex-col justify-center relative left-[3.25rem] p-[0.5rem] place-items-center">
                        <h1 className="text-[0.8rem] text-center">Enter Your Email</h1>
                        <p className="text-[0.55rem] w-[12rem] mt-[0.25rem]">Stay up to date with our latest news and update</p>
                        <div className="mx-[4.5rem]">
                            <form>
                                <input className="hidden border-2" type="text" />
                                <button className="border-2 bg-inherit font-semibold p-[0.4rem] w-[11rem] rounded-md mt-[0.3rem]">Email</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="my-[3.85rem] border-4 flex relative left-[10.35rem] border-black rounded-lg w-[24rem]"></div>
                <h1 className="text-center font-bold">Go To Resources For a Successful Purchase <a href="" className="text-2xl font-bold mt-[0.85rem]">&#8594;</a> </h1>
            </div>
            <div className="w-full p-[1rem] bg-slate-400 font-extrabold text-lg text-center mb-[2.5rem]">Top Listed Deals</div>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2200} className="p-[1.5rem] mb-[1.125rem]">
                <div><img src={carou6} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
                <div><img src={carou1} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
                <div><img src={carou2} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
                <div><img src={carou5} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
                <div><img src={carou3} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
                <div><img src={carou4} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
                <div><img src={carou5} alt="carouimg" className="w-[10rem] h-[10rem]"/></div>
            </Carousel>
        <Footer/>
        </>
    )
}