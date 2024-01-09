import Section1 from "@components/client/Home/Section1";
import { getData } from "@lib/get-data";
import React from "react";

const HomePage = async () => {
  const Data1 = await getData("Config", "information");

  return <div></div>;
};

export default HomePage;
