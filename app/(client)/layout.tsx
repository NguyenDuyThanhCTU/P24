import Copyright from "@components/layout/client/Copyright";
import Footer from "@components/layout/client/Footer.Client";
import Header from "@components/layout/client/Header.Client";
import Hotline from "@components/layout/client/Hotline";
import OnTop from "@components/layout/client/OnTop";
import { find } from "@lib/api";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = async ({ children }) => {
  const Config = await find("Config");
  const PostType = await find("PostCategory");

  return (
    <div className="font-LexendDeca font-extralight">
      <div className="relative z-50">
        <Header Data={Config ? Config : {}} Type={PostType ? PostType : []} />
      </div>
      <div className="d:mt-[120px] p:mt-[84px]">{children}</div>
      <OnTop />
      <Hotline />
      <div className="bg-gray-200">
        <Footer Data={Config ? Config : {}} />
      </div>
      <Copyright />
    </div>
  );
};

export default layout;
