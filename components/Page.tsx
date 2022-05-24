import React from "react";

import Head from "next/head";

function Page({
  children,
  title,
  description,
  meta,
}: {
  children: React.ReactNode;
  title: string;
  description?: string;
  meta?: React.ReactNode;
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        {meta}
      </Head>
      {children}
    </>
  );
}

export default Page;
