import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const ContentLayout: React.SFC<Props> = ({ children }) => (
  <div className="content-page">
    <div className="content">
      <div className="content-fluid">
          {children}
          </div>
    </div>
  </div>
);

export default ContentLayout;
