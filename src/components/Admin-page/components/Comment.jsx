/* eslint-disable react/prop-types */
export default function Comment({ data }) {
  const { name, profileUrl, comment, backColor } = data;
  return (
    <div
      className={` ${backColor} grid grid-cols-3  py-1 p-3 mt-5 justify-evenly `}
    >
      <h1>{comment}</h1>
      <div className="flex items-center justify-center">
        <img
          src={profileUrl}
          alt=""
          className="h-[18px] rounded-full w-auto bg-center mr-2"
        />
        <h1 className="text-center">{name}</h1>
      </div>
      <div className="flex items-center space-x-2 ">
        <h1 className="text-[13px] text-darkerGreen bg-white flex items-center py-1 px-1 rounded-lg">
          <span className="w-1 h-1 bg-darkerGreen rounded-full mr-1 "></span>
          Approved
        </h1>
        <h1 className="text-[13px] text-darkRed flex items-center py-1 px-1 rounded-lg bg-white">
          <span className="w-1 h-1 bg-darkRed rounded-full inline-flex items-center mr-1"></span>
          Disapproved
        </h1>
      </div>
    </div>
  );
}
