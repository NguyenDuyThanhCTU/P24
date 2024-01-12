import Copyright from "@components/layout/client/Copyright";
import Footer from "@components/layout/client/Footer.Client";
import Header from "@components/layout/client/Header.Client";

type ClientLayoutProps = {
  children: React.ReactNode;
};

const layout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <div className="font-LexendDeca font-extralight">
      <Header />
      <div className="">{children}</div>
      {/* <OnTop />
      <Hotline /> */}
      <div className="bg-gray-200">
        <Footer />
      </div>
      <Copyright />
    </div>
  );
};

export default layout;
