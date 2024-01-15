import PostCategory from "@components/client/Home/Posts/PostCategory";
import { getData } from "@lib/Get";
import React from "react";

const NewsLayout = async ({ children }: { children: React.ReactNode }) => {
  const Data: any = await getData("Posts");

  return (
    <div className=" bg-no-repeat bg-cover bg-center bg-[url(https://firebasestorage.googleapis.com/v0/b/suanhacantho-3b53d.appspot.com/o/UI%2F1.jpg?alt=media&token=93ff34f0-0ba9-49a4-8739-63b4612fc0ff)] min-h-screen">
      <div className="bg-[rgba(255,255,255,0.8)] min-h-screen">
        <div className=" p:py-2 d:py-16   p:w-auto d:w-[1300px] p:mx-auto d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10">
          <div className="border h-max border-gray-400 d:block p:hidden col-span-2">
            <div className="p-3 ">
              <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
                Bài viết mới nhất
              </h2>
              <PostCategory Data={Data} />
            </div>
          </div>
          {children}
          <div className="border h-max border-gray-400 p:col-auto d:col-span-2 d:hidden p:block">
            <div className="p-3 ">
              <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
                Bài viết mới nhất
              </h2>
              <PostCategory Data={Data} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsLayout;
