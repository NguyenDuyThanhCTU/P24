import Section1 from "@components/client/Home/Section1";
import { getData } from "@lib/get-data";
import React from "react";

const HomePage = async () => {
  const Data1 = await getData("Config", "information");

  return (
    <div>
      <h1>HomePage</h1>
      <p>{Data1?.NotFoundNavigate}</p>

      <Section1 />
    </div>
  );
};

export default HomePage;
