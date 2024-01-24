"use client";
import { useData } from "@context/DataProviders";
import React, { useEffect } from "react";

const StorageProvider = ({ Posts, Config }: any) => {
  const { setPosts, setConfig } = useData();

  useEffect(() => {
    setPosts(Posts);
  }, [Posts]);

  useEffect(() => {
    setConfig(Config);
  }, [Config]);

  return <div></div>;
};

export default StorageProvider;
