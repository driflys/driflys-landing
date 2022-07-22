import React, { ReactNode } from "react"

// components
import { SimpleHeader } from "../components/headers"
import { SimpleFooter } from "../components/footers"

function SimpleLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SimpleHeader />
      <>{children}</>
      <SimpleFooter />
    </>
  )
}

export default SimpleLayout
