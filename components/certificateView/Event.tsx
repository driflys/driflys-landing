import ClockIcon from "@heroicons/react/outline/ClockIcon"

import { mapEventDuration, mapEventType } from "../../utils/mapper"

interface Props {
  name: string
  type: string
  description?: string
  duration: string
}

function Event({ name, type, description, duration }: Props) {
  return (
    <div>
      <h5 className="text-gray-500">About the event</h5>
      <h5 className="font-bold text-lg mt-4">{name}</h5>
      <div className="flex flex-row items-center gap-8 mt-2">
        <p className="font-bold text-sm text-gray-500">{mapEventType(type, "server-client")}</p>
        <div className="flex flex-row items-center gap-2">
          <ClockIcon className="w-5 h-5 text-gray-500" />
          <p className="font-bold text-sm text-gray-500">{mapEventDuration(duration, "server-client")}</p>
        </div>
      </div>
      <p className="mt-4">{description}</p>
    </div>
  )
}

export default Event
