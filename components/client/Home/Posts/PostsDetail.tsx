import React from "react";
import { AiOutlineClockCircle, AiOutlineUser } from "react-icons/ai";

const PostsDetail = ({ Data }: any) => {
  const markup = { __html: Data?.content ? Data?.content : "<p></p>" };

  return (
    <div>
      <div className=" pb-5 border-b flex flex-col gap-4">
        <h3 className=" text-[34px] font-normal">{Data?.title}</h3>
        <div className="flex gap-5">
          <div className="uppercase p-1 text-blue-500 border border-blue-500 ">
            {Data?.level0}
          </div>
          <div className="flex items-center gap-1 text-gray-400 pr-5 border-r">
            <AiOutlineClockCircle />
            {/* <p className="">{Data.date}</p> */}
          </div>
          <div className="flex items-center gap-1 text-gray-400">
            <AiOutlineUser />
            <p className=""> Nha Khoa Trần Húy</p>
          </div>
        </div>
      </div>
      <div
        className="font-LexendDeca font-extralight mt-5 flex-col flex gap-3"
        dangerouslySetInnerHTML={markup}
      ></div>
    </div>
  );
};

export default PostsDetail;
