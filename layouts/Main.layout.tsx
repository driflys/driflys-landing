import { ReactNode } from "react";

// components
import { MainFooter } from "../components/footers";
import { MainHeader } from "../components/headers";

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainHeader />
      <>{children}</>
      <MainFooter />
    </>
  );
}

export default MainLayout;
