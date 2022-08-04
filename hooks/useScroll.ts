import { useEffect, useState } from "react"

function useScroll() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent)

    return () => window.removeEventListener("scroll", listenScrollEvent)
  }, [])

  const listenScrollEvent = () => {
    if (window.scrollY < 100) setScrolled(false)
    else setScrolled(true)
  }

  const scrollTo = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return { scrolled, scrollTo }
}

export default useScroll
