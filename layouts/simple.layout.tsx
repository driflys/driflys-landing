import React, { ReactNode } from "react";

// components
import { SimpleHeader } from "../components/headers";
import { SimpleFooter } from "../components/footers";

function SimpleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SimpleHeader />
      <div className="pt-14 lg:px-32 xl:px-32 bg-gray-50">{children}</div>
      <SimpleFooter />
    </>
  );
}

export default SimpleLayout;
