import React, { useState } from "react";
import Home from "../components/Home";
import ContentLayout from "./layouts/ContentLayout";

const HomePage: React.FunctionComponent = () => {
  return (
    <>
      <ContentLayout>
        <div style={{ marginTop: "50px" }}>
          <Home />
        </div>
      </ContentLayout>
    </>
  );
};

export default HomePage;
