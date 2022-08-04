import { ReactNode } from "react"

// components
import { MainHeader } from "../components/headers"
import { MainFooter } from "../components/footers"

function MainLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <MainHeader />
      <>{children}</>
      <MainFooter />
    </>
  )
}

export default MainLayout
