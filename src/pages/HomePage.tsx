import React, { useState } from "react";
import Home from "../components/Home";
import ContentLayout from "./layouts/ContentLayout";

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <ContentLayout>
        <Home />
      </ContentLayout>
    </>
  );
};

export default HomePage;
