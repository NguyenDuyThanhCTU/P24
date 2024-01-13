import PostCategory from "@components/client/Home/Posts/PostCategory";
import PostsDetail from "@components/client/Home/Posts/PostsDetail";
import { getData, getDataLimit } from "@lib/Get";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Chi tiết sản phẩm | Camera Vstarcam ",
  description: "Camera Vstarcam - An Lành Cho Gia Đình Việt",
};

const ProductDetailPage = async ({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const searchValue: any = searchParams.spid;
  const Data = await getData("Posts", searchValue);

  const DataCategory = await getDataLimit("Posts", undefined, 8);

  return (
    <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10 py-10">
      <div className="border h-max border-gray-400 col-span-2 d:block p:hidden">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết liên quan
          </h2>
          <PostCategory Data={DataCategory ? DataCategory : []} />
        </div>
      </div>
      <div className="py-10 col-span-5">
        <PostsDetail Data={Data} />
      </div>
      {/* <div className="border h-max border-gray-400 p:col-auto d:col-span-2 d:hidden p:block">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết liên quan
          </h2>
          <Category Data={DataCategory} />
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetailPage;
