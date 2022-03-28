import Head from "next/head";
import React from "react";

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
