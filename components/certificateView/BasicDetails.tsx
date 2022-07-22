// icons
import UserCircleIcon from "@heroicons/react/solid/UserCircleIcon"

import { formatDate } from "../../utils"

interface Props {
  certificateId: string
  receiverName: string
  createdAt: string
}

function BasicDetails({ certificateId, receiverName, createdAt }: Props) {
  return (
    <div>
      <div className="flex flex-wrap items-center justify-between">
        <h1 className="flex items-center text-xl font-semibold">
          <UserCircleIcon className="w-10 mr-2 text-gray-500" /> {receiverName}
        </h1>
        <h1 className="text-xl text-blue-700 font-semibold">{certificateId}</h1>
      </div>

      <p className="mt-2 text-gray-500">
        Issued on <span className="text-black">{formatDate(createdAt)}</span>
      </p>
    </div>
  )
}

export default BasicDetails
