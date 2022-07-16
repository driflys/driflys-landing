import React from "react";

import MetaTags from "./MetaTags";

function Page({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) {
  return (
    <>
      <MetaTags title={title} />
      {children}
    </>
  );
}

export default Page;
