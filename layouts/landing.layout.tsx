import React, { ReactNode } from "react";

// components
import { LandingHeader } from "../components/headers";
import { LandingFooter } from "../components/footers";

function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <LandingHeader />
      <div>{children}</div>
      <LandingFooter />
    </>
  );
}

export default LandingLayout;
