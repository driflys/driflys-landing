// next
import Image from "next/image"

import LoaderAnimation from "../public/illustrations/Loader.gif"

function Loader() {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-white h-screen flex flex-col gap-2 justify-center items-center">
      <Image src={LoaderAnimation} alt="Loader" width={50} height={50} objectFit="contain" />
      <p className="text-blue-700 font-semibold">Please wait</p>
    </div>
  )
}

export default Loader
