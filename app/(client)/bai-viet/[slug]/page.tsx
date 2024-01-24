import PostCategory from "@components/client/Home/Posts/PostCategory";
import PostsDetail from "@components/client/Home/Posts/PostsDetail";
import { getData, getDataLimit } from "@lib/Get";
import { find } from "@lib/api";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Trang Chủ - Nha khoa thẩm mỹ Trần Húy",
  description: "Trần Húy - Nha khoa thẩm mỹ uy tín tại Cần Thơ",
};
const ProductDetailPage = async ({ params }: { params: { slug: string } }) => {
  const PostCategoryData: any = await find("Posts");
  const Data = PostCategoryData?.find(
    (items: any) => items.url === params.slug
  );
  return (
    <div className="p:w-auto d:w-[1300px] p:mx-2 d:mx-auto grid p:grid-cols-1 d:grid-cols-7 font-LexendDeca font-extralight gap-10 py-10">
      <div className="border h-max border-gray-400 col-span-2 d:block p:hidden">
        <div className="p-3 ">
          <h2 className="text-[20px] uppercase text-center pb-2 border-b border-black">
            Bài viết liên quan
          </h2>
          <PostCategory Data={PostCategoryData ? PostCategoryData : []} />
        </div>
      </div>
      <div className="py-10 col-span-5">
        <PostsDetail Data={Data} />
      </div>
    </div>
  );
};

export default ProductDetailPage;
