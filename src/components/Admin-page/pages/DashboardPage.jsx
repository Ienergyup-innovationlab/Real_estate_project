import Sidebar from "../components/Sidebar";
import housesOrdersData from "../data/housesOrders";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import commentsData from "../data/commentsData";
import Comment from "../components/Comment";
export default function DashboardPage() {
  return (
    <div className="flex overflow-x-hidden">
      <Sidebar />
      <div className="h-full font-Inter">
        <Navbar />
        <div className="mx-28 mt-20">
          <div className="flex items-center space-x-20">
            <div className=" grid  grid-cols-2 gap-y-4 gap-x-5 font-Inter">
              {housesOrdersData.map((data) => (
                <Card key={data.id} data={data} />
              ))}
            </div>
            <div>
              <img
                src="../images/placeholder.jpg"
                alt=""
                className="w-[700px] h-[450px]"
              />
            </div>
          </div>
          <div className="mt-20 grid grid-cols-3 gap-x-10 pb-20">
            <div className="shadow-md p-7">
              <div className="flex items-center justify-between">
                <h1>Total Customers</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>
              <h1 className="py-3 text-[36px]">2,240</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-lightGreen"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                    />
                  </svg>
                  <p className="text-lightGreen">40%</p>
                </div>
                <p className=" text-textGray">
                  vs last <br /> month
                </p>
                <img src="../src/assets/_Chart.png" alt="" />
              </div>
            </div>
            <div className="shadow-md p-7">
              <div className="flex items-center justify-between">
                <h1>Registered Users</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>
              <h1 className="py-3 text-[36px]">1,210</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-darkRed"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
                    />
                  </svg>
                  <p className="text-darkRed">10%</p>
                </div>
                <p className=" text-textGray">
                  vs last <br /> month
                </p>
                <img src="../src/assets/chartDown.png" alt="" />
              </div>
            </div>
            <div className="shadow-md p-7">
              <div className="flex items-center justify-between">
                <h1>Active Now</h1>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
                  />
                </svg>
              </div>
              <h1 className="py-3 text-[36px]">316</h1>
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 text-lightGreen"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
                    />
                  </svg>
                  <p className="text-lightGreen">20%</p>
                </div>
                <p className=" text-textGray">
                  vs last <br /> month
                </p>
                <img src="../src/assets/_Chart.png" alt="" />
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 ">
            <div>
              <div className="flex items-center">
                <h1 className="text-[24px] font-bold">Comments</h1>
                <div className="flex items-center ml-5 space-x-3">
                  <h1 className="text-[14px] text-darkerGreen">
                    <span className="w-2 h-2 bg-darkerGreen rounded-full inline-flex items-center mr-1"></span>
                    Approved
                  </h1>
                  <h1 className="text-[14px] text-darkRed">
                    <span className="w-2 h-2 bg-darkRed rounded-full inline-flex items-center mr-1"></span>
                    Disapproved
                  </h1>
                </div>
              </div>
              <div className="flex flex-col justify-center">
                {commentsData.map((comment) => (
                  <Comment key={comment.id} data={comment} />
                ))}
              </div>
            </div>
            <div className="ml-28">
              <h1 className="text-left text-[24px]">Ratings</h1>
              <div className="grid grid-cols-2">
                <div className="space-y-6">
                  <div className="mt-3 flex items-center space-x-3">
                    <img
                      src="../../src/assets/profilePic.jpg"
                      alt=""
                      className="h-[40px] w-[30px] bg-center rounded-full"
                    />
                    <div className="flex items-center space-x-2">
                      <img
                        src="src/components/Admin-page/images/Star.jpg"
                        alt=""
                      />
                      <img src="../../Admin-page/images/Star.jpg" alt="" />
                      <img src="../../Admin-page/images/Star.jpg" alt="" />
                      <img src="../../Admin-page/images/Star.jpg" alt="" />
                      <img src="../../Admin-page/images/Star.jpg" alt="" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center space-x-3">
                    <img
                      src="../../src/assets/profilePic.jpg"
                      alt=""
                      className="h-[40px] w-[30px] bg-center rounded-full"
                    />
                    <div className="flex items-center space-x-2">
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/grey.jpg" alt="" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center space-x-3">
                    <img
                      src="../../src/assets/profilePic.jpg"
                      alt=""
                      className="h-[40px] w-[30px] bg-center rounded-full"
                    />
                    <div className="flex items-center space-x-2">
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/grey.jpg" alt="" />
                      <img src="../../src/assets/grey.jpg" alt="" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center space-x-3">
                    <img
                      src="../../src/assets/profilePic.jpg"
                      alt=""
                      className="h-[40px] w-[30px] bg-center rounded-full"
                    />
                    <div className="flex items-center space-x-2">
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/grey.jpg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="space-y-6">
                  <div className="mt-3 flex items-center space-x-3">
                    <img
                      src="../../src/assets/profilePic.jpg"
                      alt=""
                      className="h-[40px] w-[30px] bg-center rounded-full"
                    />
                    <div className="flex items-center space-x-2">
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/grey.jpg" alt="" />
                      <img src="../../src/assets/grey.jpg" alt="" />
                      <img src="../../src/assets/grey.jpg" alt="" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center space-x-3">
                    <img
                      src="../../src/assets/profilePic.jpg"
                      alt=""
                      className="h-[40px] w-[30px] bg-center rounded-full"
                    />
                    <div className="flex items-center space-x-2">
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/grey.jpg" alt="" />
                      <img src="../../src/assets/grey.jpg" alt="" />
                      <img src="../../src/assets/grey.jpg" alt="" />
                    </div>
                  </div>
                  <div className="mt-3 flex items-center space-x-3">
                    <img
                      src="../../src/assets/profilePic.jpg"
                      alt=""
                      className="h-[40px] w-[30px] bg-center rounded-full"
                    />
                    <div className="flex items-center space-x-2">
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/Star.jpg" alt="" />
                      <img src="../../src/assets/grey.jpg" alt="" />
                      <img src="../../src/assets/grey.jpg" alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
