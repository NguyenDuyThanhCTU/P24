import Copyright from "@components/layout/client/Copyright";
import Footer from "@components/layout/client/Footer.Client";
import Header from "@components/layout/client/Header.Client";
import { getData, getDataLimit } from "@lib/Get";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = async ({ children }) => {
  const Data = await getDataLimit("Posts", undefined, 3);
  const HeaderData = await getData("Config");
  const ContactData = HeaderData.find((item: any) => item.id === "contact");
  const PostType = await getData("PostCategory");
  return (
    <div className="font-LexendDeca font-extralight">
      <div className="relative z-50">
        <Header
          Data={ContactData ? ContactData : []}
          Type={PostType ? PostType : []}
        />
      </div>
      <div className="d:mt-[120px] p:mt-[84px]">{children}</div>
      {/* <OnTop />
      <Hotline /> */}
      <div className="bg-gray-200">
        <Footer Data={Data ? Data : []} />
      </div>
      <Copyright />
    </div>
  );
};

export default layout;
