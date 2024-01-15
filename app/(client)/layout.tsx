import Copyright from "@components/layout/client/Copyright";
import Footer from "@components/layout/client/Footer.Client";
import Header from "@components/layout/client/Header.Client";
import { getData, getData1, getDataLimit } from "@lib/Get";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = async ({ children }) => {
  // const ContactData: any = await getData("Config");
  // const PostType: any = await getData("PostCategory");
  // const Data: any = await getData("test");
  // console.log(ContactData);
  let Data: any;
  await getData("Config").then((res: any) => {
    Data = res;
  });
  console.log(Data);
  return (
    <div className="font-LexendDeca font-extralight">
      {Data[0]?.etag}
      {/* <div className="relative z-50">
        <Header
          Data={ContactData ? ContactData : {}}
          Type={PostType ? PostType : []}
        />
      </div>
      <div className="h-screen flex justify-center items-center">
        {Data[0].name}
      </div> */}
      {/* <div className="d:mt-[120px] p:mt-[84px]">{children}</div>
      <OnTop />
      <Hotline />
      <div className="bg-gray-200">
        <Footer Data={Data ? Data : []} />
      </div>*/}
      <Copyright />
    </div>
  );
};

export default layout;
