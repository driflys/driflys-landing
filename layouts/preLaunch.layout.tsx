import React, { ReactNode } from "react";

// components
import { PreLaunchHeader } from "../components/headers";
import { PreLaunchFooter } from "../components/footers";

function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <PreLaunchHeader />
      <div>{children}</div>
      <PreLaunchFooter />
    </>
  );
}

export default LandingLayout;
