import React from "react"

import MetaTags, { MetaTagProps } from "./MetaTags"

interface PageProps extends MetaTagProps {
  children: React.ReactNode
}

function Page({ children, ...rest }: PageProps) {
  return (
    <>
      <MetaTags {...rest} />
      {children}
    </>
  )
}

export default Page
