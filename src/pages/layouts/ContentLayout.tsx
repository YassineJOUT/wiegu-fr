import React, { ReactNode } from "react";
import Topbar from "../../components/Shared/Topbar";

type Props = {
  children: ReactNode;
};

const ContentLayout: React.SFC<Props> = ({ children }) => (
  <div className="content-page">
    <div className="content">
      <div className="content-fluid">
        <Topbar>
        {children}
        </Topbar>
          
          </div>
    </div>
  </div>
);

export default ContentLayout;
